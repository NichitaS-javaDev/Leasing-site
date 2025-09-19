import axios from 'axios';
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => useServerHost();

export const getRates = async () => {
    try {
        return await axios.get(`${BASE_URL()}/rates`);
    } catch (error) {
        console.error('Error fetching rates:', error);
        throw error;
    }
};

export const updateRates = async (newRates) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/rates`,{
                data: newRates
            },
            {
                withCredentials:true
            })
    } catch (error){
        console.error('Error updating leasing rates:', error);
        throw error;
    }
}


