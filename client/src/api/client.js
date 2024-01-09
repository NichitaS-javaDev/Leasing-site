import axios from 'axios';
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

export const getAllClients = async () => {
    try {
        return await axios.get(`${BASE_URL()}/secure/client`, {
            withCredentials: true
        })
    } catch (error) {
        console.error(`Error fetching clients: `, error);
        throw error;
    }
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

export const approveNewClientData = async (id) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/client/approve/${id}`, {}, {
            withCredentials: true
        })
    } catch (error) {
        console.error('Error approving new client data', error);
        throw error;
    }
}

export const rejectNewClientData = async (id) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/client/reject/${id}`, {}, {
            withCredentials: true
        })
    } catch (error) {
        console.error('Error rejecting new client data', error);
        throw error;
    }
}