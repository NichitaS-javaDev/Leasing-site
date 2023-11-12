import axios from "axios";
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

export const getCarById = async (id) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/cars/${id}`,
            {withCredentials: true}
        );
    } catch (error) {
        console.error(`Error fetching car with id=${id}:`, error);
        throw error;
    }
}

export const getAllCars = async () => {
    try {
        return await axios.get(`${BASE_URL()}/cars`);
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
}

export const createCar = async (carDetails) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/cars`, {
                ...carDetails
            },
            {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error creating car:', error);
        throw error;
    }
}

export const updateCar = async (carDetails) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/cars/${carDetails['_id']}`, {
                ...carDetails
            },
            {
                withCredentials: true
            })
    } catch (error) {
        console.error('Error updating car:', error);
        throw error;
    }
}

export const deleteCar = async (id) => {
    try {
        return await axios.delete(`${BASE_URL()}/secure/cars/${id}`, {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
}