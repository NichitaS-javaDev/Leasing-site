import axios from 'axios';
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

export const getClientByUsername = async (username) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/client/${username}`, {
            withCredentials: true
        })
    } catch (error) {
        console.error(`Error fetching client with username=${username}:`, error);
        throw error;
    }
}

export const sendNewDataForApprove = async (clientDetails) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/client`, {
            ...clientDetails
        }, {
            withCredentials: true
        })
    } catch (error) {
        console.error('Error sending new client data', error);
        throw error;
    }
}