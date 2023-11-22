const express = require("express");
const router = express.Router();
const uuid = require('uuid');
const FarmEquipment = require("../../model/FarmEquipment");

router.get('/farmEquipment/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const farmEquipment = await FarmEquipment.findOne({'_id': id});
        res.json(farmEquipment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/farmEquipment', async function (req, res) {
    try {
        const {farmEquipmentDetails} = req.body;

        const newFarmEquipment = await FarmEquipment.create({
            _id: uuid.v4(),
            model: farmEquipmentDetails.model,
            weight: farmEquipmentDetails.weight,
            engine: farmEquipmentDetails.engine,
            fuelTank: farmEquipmentDetails.fuelTank,
            power: farmEquipmentDetails.power,
            payloadCapacity: farmEquipmentDetails.payloadCapacity,
            price: farmEquipmentDetails.price,
            img: farmEquipmentDetails.img
        });

        res.json(newFarmEquipment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.delete('/farmEquipment/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const farmEquipment = await FarmEquipment.deleteOne({'_id': id})
        res.json(farmEquipment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})