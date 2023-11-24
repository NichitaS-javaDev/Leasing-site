import axios from 'axios';
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

export const generateContract = async (car) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/contract/generate`, {
            ...car
        }, {withCredentials: true})
    } catch (error) {
        throw error;
    }
}

export const getAllContracts = async () => {
    try {
        return await axios.get(`${BASE_URL()}/secure/contract`, {
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
