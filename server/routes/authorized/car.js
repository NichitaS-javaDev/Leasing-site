const express = require("express");
const router = express.Router();
const Car = require("../../model/Car");
const uuid = require('uuid');

router.get('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const car = await Car.findOne({'_id': id});
        res.json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async function (req, res) {
    try {
        const carDetails = req.body;

        const newCar = await Car.create({...carDetails, _id: uuid.v4()})

        res.json(newCar);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/:id', async function (req, res) {
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

router.delete('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const car = await Car.deleteOne({'_id': id})
        res.json(car);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router