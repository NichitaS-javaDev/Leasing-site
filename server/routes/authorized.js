const express = require("express");
const router = express.Router();
const LeasingRate = require("../model/LeasingRate");
const carRouter = require('./authorized/car')
const apartmentRouter = require('./authorized/apartment')
const contractRoute = require('./authorized/contract')
const clientRouter = require('./authorized/client')

router.use('/', function (req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).json({message: 'Unauthorized'});
    }
})

router.use('/cars', carRouter);
router.use('/apartments', apartmentRouter)
router.use('/contract', contractRoute)
router.use('/client', clientRouter)

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

module.exports = router