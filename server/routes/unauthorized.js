const express = require("express");
const router = express.Router();
const Car = require("../model/Car");
const Apartment = require("../model/Apartment");
const FarmEquipment = require("../model/FarmEquipment");
const LeasingRate = require("../model/LeasingRate");

router.get('/', function(req, res) {
    res.render('index');
});

// <----- CARS ----->
router.get('/cars', async function(req, res) {
    try {
        const cars = await Car.find().sort({'price':1});
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// <----- APARTMENTS ----->
router.get('/apartments', async function(req, res) {
    try {
        const apartments = await Apartment.find().sort({'price':1});
        res.json(apartments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// <----- FARM EQUIPMENT ----->
router.get('/farmEquipment', async function(req, res) {
    try {
        const farmEquipment = await FarmEquipment.find().sort({'price':1});
        res.json(farmEquipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// <----- RATE ----->
router.get('/rates', async function(req, res) {
    try {
        const rates = await LeasingRate.find();
        res.json(rates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router