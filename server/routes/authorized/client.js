const express = require("express");
const router = express.Router();
const Client = require("../../model/Client");
const mongoose = require("mongoose");

router.get('/:username', async function (req, res) {
    const {username} = req.params;

    try {
        const client = await Client.findOne({'username': username, '_id': {$not: /_pending/}})
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

module.exports = router