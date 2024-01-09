const express = require("express");
const router = express.Router();
const Client = require("../../model/Client");
const mongoose = require("mongoose");

router.get('/', async function (req, res) {
    try {
        const clients = await Client.find({'_id': {$not: /_backup/}, "profileStatus": {$eq: "pending"}})
        res.json(clients)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.get('/:username', async function (req, res) {
    const {username} = req.params;

    try {
        const client = await Client.findOne({'username': username, '_id': {$not: /_backup/}})
        res.json(client)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async function (req, res) {
    const {...newClientDetails} = req.body;
    const backupId = `${newClientDetails._id}_backup`;

    try {
        const session = await mongoose.startSession();
        await session.startTransaction();
        let client = await Client.findOne({'_id': newClientDetails._id})
        const clientBackup = Object.assign({}, client.toObject(), {_id: backupId});
        await Client.create(clientBackup)
        for (const key in newClientDetails) {
            if (req.body.hasOwnProperty(key)) {
                client[key] = newClientDetails[key]
            }
        }
        client = Object.assign({}, client.toObject(), {profileStatus: 'pending'});
        await Client.updateOne({'_id': client._id}, client)
        await session.commitTransaction();
        await session.endSession();

        res.json(client)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/approve/:id', async function (req, res) {
    const {id} = req.params;
    const backupId = `${id}_backup`;

    try {
        const session = await mongoose.startSession();
        await session.startTransaction();
        const updatedClientData = await Client.findByIdAndUpdate(
            id,
            {$set: {profileStatus: "approved"}},
            {new: true}
        );
        await Client.findByIdAndRemove(backupId);
        await session.commitTransaction();
        await session.endSession();

        res.json(updatedClientData)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/reject/:id', async function (req, res) {
    const {id} = req.params;
    const backupId = `${id}_backup`;

    try {
        const session = await mongoose.startSession();
        await session.startTransaction();
        await Client.findByIdAndRemove(id);
        let clientDataBackup = await Client.findById(backupId);
        clientDataBackup = Object.assign({}, clientDataBackup.toObject(), {_id: id, profileStatus: "approved"});
        await Client.create(clientDataBackup);
        await Client.findByIdAndRemove(backupId);
        await session.commitTransaction();
        await session.endSession();

        res.json(clientDataBackup)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router