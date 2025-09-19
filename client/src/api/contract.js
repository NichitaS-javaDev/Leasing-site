import axios from 'axios';
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => useServerHost();

export const generateContract = async (car) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/contract/generate`, {
            ...car
        }, {withCredentials: true})
    } catch (error) {
        throw error;
    }
}

export const signContract = async (docId) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/contract/sign`, {
            docId: docId,
            signerEmail: 'nichita.saharov@isa.utm.md'
        }, {withCredentials: true})
    } catch (error) {
        throw error;
    }
}

export const viewContract = async (docId) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/contract/view/${docId}`, {
            withCredentials: true
        })
    } catch (error) {
        throw error;
    }
}

export const getAllContractsByUsername = async (username) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/contract/user/${username}`, {
            withCredentials: true
        })
    } catch (error) {
        throw error;
    }
}

export const getAllContractsByStatus = async (status) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/contract/status/${status}`, {
            withCredentials: true
        })
    } catch (error) {
        throw error;
    }
}

export const updateContract = async ({id, paymentSum}) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/contract/${id}`, {
            paymentSum: paymentSum
        }, {
            withCredentials: true
        })
    } catch (error) {
        throw error;
    }
}
