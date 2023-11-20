const express = require("express");
const router = express.Router();
const Car = require("../model/Car");
const uuid = require('uuid');
const Apartment = require("../model/Apartment");
const FarmEquipment = require("../model/FarmEquipment");
const LeasingRate = require("../model/LeasingRate");
const Client = require("../model/Client")

router.use('/', function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
})


// <----- CARS ----->
router.get('/cars/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const car = await Car.findOne({'_id': id});
        res.json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/cars', async function (req, res) {
    try {
        const carDetails = req.body;

        const newCar = await Car.create({...carDetails, _id: uuid.v4()})

        res.json(newCar);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/cars/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const car = await Car.findOne({'_id': id});

        if (!car) {
            return res.status(404).json({message: 'Car not found'});
        }

        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                car[key] = req.body[key]
            }
        }

        await Car.updateOne({'_id': id}, car)
            .then(result => res.json(result))
            .catch(error => res.status(500).json({message: error.message}))
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.delete('/cars/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const car = await Car.deleteOne({'_id': id})
        res.json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


// <----- APARTMENTS ----->
router.get('/apartments/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.findOne({'_id': id});
        res.json(apartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/apartments', async function (req, res) {
    try {
        const {apartmentDetails} = req.body;

        const newApartment = await Apartment.create({...apartmentDetails, _id: uuid.v4()})

        res.json(newApartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/apartments/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.findOne({'_id': id});

        if (!apartment) {
            return res.status(404).json({message: 'Apartment not found'});
        }

        for (const key in req.body) {
            if (req.body.hasOwnProperty(key)) {
                apartment[key] = req.body[key]
            }
        }

        await Apartment.updateOne({'_id': id}, apartment)
            .then(result => res.json(result))
            .catch(error => res.status(500).json({message: error.message}))
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.delete('/apartments/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.deleteOne({'_id': id})
        res.json(apartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


// <----- FARM EQUIPMENT ----->
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


// <----- RATE ----->
router.put('/rates', async function (req, res) {
    const newRates = req.body.data
    try {
        for (const newRate of newRates) {
            await LeasingRate.updateOne({_id: newRate.id}, {$set: {rate: newRate.rate}})
        }
        res.json(newRates)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


// <----- CLIENT ----->
router.get('/clients/:username', async function (req, res) {
    const {username} = req.params;
    try {
        const client = await Client.findOne({'username': username})
        res.json(client)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
module.exports = router