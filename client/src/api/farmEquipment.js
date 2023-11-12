import axios from "axios";
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

export const getAllFarmEquipment = async () => {
    try {
        return await axios.get(`${BASE_URL()}/farmEquipment`);
    } catch (error) {
        console.error('Error fetching farm equipment:', error);
        throw error;
    }
};

export const createFarmEquipment = async (farmEquipmentDetails) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/farmEquipment`, {
                farmEquipmentDetails
            },
            {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error creating farm equipment:', error);
        throw error;
    }
};

export const deleteFarmEquipment = async (id) => {
    try {
        return await axios.delete(`${BASE_URL()}/secure/farmEquipment/${id}`, {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error deleting farm equipment:', error);
        throw error;
    }
};