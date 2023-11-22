const express = require("express");
const router = express.Router();
const Apartment = require("../../model/Apartment");
const uuid = require('uuid');

router.get('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.findOne({'_id': id});
        res.json(apartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/', async function (req, res) {
    try {
        const {apartmentDetails} = req.body;

        const newApartment = await Apartment.create({...apartmentDetails, _id: uuid.v4()})

        res.json(newApartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/:id', async function (req, res) {
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

router.delete('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const apartment = await Apartment.deleteOne({'_id': id})
        res.json(apartment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router