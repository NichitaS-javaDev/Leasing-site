const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const axios = require("axios");
const Contract = require("../../model/Contract");
const Car = require("../../model/Car");

router.get('/:username', async function (req, res) {
    const {username} = req.params;
    try {
        const contracts = await Contract.find({'owner': username});
        res.json(contracts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/view/:docId', async function (req, res) {
    const BOLD_SIGN_URL = process.env.BOLDSIGN_BASE_URL
    const downloadUrl = `${BOLD_SIGN_URL}/document/download`;
    const headers = {
        'X-API-KEY': process.env.BOLDSIGN_API_KEY
    };
    const {docId} = req.params;

    try {
        const response = await axios.get(downloadUrl, {
            headers: headers,
            params: {documentId: docId},
            responseType: 'arraybuffer'
        })

        const base64Data = Buffer.from(response.data).toString('base64');

        res.send(base64Data)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.put('/:id', async function (req, res) {
    const {id} = req.params;
    try {
        const contract = await Contract.findOne({'_id': id});

        if (!contract) {
            return res.status(404).json({message: 'Car not found'});
        }

        contract['paidAmount'] = (contract['paidAmount'] + parseFloat(req.body.paymentSum)).toFixed(2)

        await Contract.updateOne({'_id': id}, contract)
            .then(result => res.json(result))
            .catch(error => res.status(500).json({message: error.message}))
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

router.post('/generate', async (req, res) => {
    const BOLD_SIGN_URL = process.env.BOLDSIGN_BASE_URL
    const sendUrl = `${BOLD_SIGN_URL}/template/send`;
    const embedSignUrl = `${BOLD_SIGN_URL}/document/getEmbeddedSignLink`;
    const headers = {
        'X-API-KEY': process.env.BOLDSIGN_API_KEY,
        'Content-Type': 'application/json',
    };

    const car = req.body;

    const data = {
        roles: [
            {
                roleIndex: 1,
                signerName: car.clientName,
                signerEmail: 'nsaharov33@gmail.com',
                existingFormFields: [
                    {
                        id: 'name',
                        value: car.clientName,
                    },
                    {
                        id: 'model',
                        value: car.model,
                    },
                    {
                        id: 'config',
                        value: car.description,
                    },
                    {
                        id: 'vin',
                        value: uuid.v4(),
                    },
                    {
                        id: 'price',
                        value: car.price,
                    },
                    {
                        id: 'downPayment',
                        value: car.downPayment,
                    },
                    {
                        id: 'totalPrice',
                        value: car.totalPrice,
                    },
                    {
                        id: 'retailPrice',
                        value: car.price,
                    },
                    {
                        id: 'agreedPrice',
                        value: car.price,
                    },
                    {
                        id: 'amortizedAmount',
                        value: car.monthlyPayment,
                    },
                    {
                        id: 'interestRate',
                        value: car.interestRate,
                    },
                    {
                        id: 'casco',
                        value: car.insurance,
                    },
                    {
                        id: 'months',
                        value: car.term,
                    },
                    {
                        id: 'lessee',
                        value: car.clientName,
                    }
                ],
            },
            {
                roleIndex: 2,
                signerName: 'name',
                signerEmail: 'nichita.saharov@isa.utm.md',
            },
        ],
        disableEmails: true,
    };

    try {
        const response = await axios.post(sendUrl, data, {
            headers: headers,
            params: {templateId: process.env.BOLDSIGN_CAR_TEMPLATE_ID},
        });
        const docId = response.data.documentId;

        const redirectUrl = (process.env.CLIENT_HOST).toString().concat('/clientDashboard')
        const result = await axios.get(embedSignUrl, {
            headers: headers,
            params: {documentId: docId, signerEmail: 'nsaharov33@gmail.com', redirectUrl: redirectUrl},
        });
        const signUrl = result.data.signLink;

        const contractCar = await Car.findOne({'_id': car._id});

        const contractDetails = {
            _id: uuid.v4(),
            model: car.model,
            totalPrice: car.totalPrice,
            paidAmount: car.downPayment,
            monthlyPayment: car.monthlyPayment,
            docId: docId,
            owner: car.owner,
            img: contractCar.img
        }

        await Contract.create({...contractDetails})

        res.json(signUrl)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

module.exports = router