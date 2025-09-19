import axios from "axios";
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => useServerHost();

export const getApartmentById = async (id) => {
    try {
        return await axios.get(`${BASE_URL()}/secure/apartments/${id}`,
            {withCredentials: true}
        );
    } catch (error) {
        console.error(`Error fetching apartment with id=${id}:`, error);
        throw error;
    }
};

export const getAllApartments = async () => {
    try {
        return await axios.get(`${BASE_URL()}/apartments`);
    } catch (error) {
        console.error('Error fetching apartments:', error);
        throw error;
    }
};

export const createApartment = async (apartmentDetails) => {
    try {
        return await axios.post(`${BASE_URL()}/secure/apartments`, {
                ...apartmentDetails
            },
            {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error creating apartment:', error);
        throw error;
    }
};

export const updateApartment = async (apartmentDetails) => {
    try {
        return await axios.put(`${BASE_URL()}/secure/apartments/${apartmentDetails['_id']}`, {
                ...apartmentDetails
            },
            {
                withCredentials: true
            })
    } catch (error) {
        console.error('Error updating apartment:', error);
        throw error;
    }
}

export const deleteApartment = async (id) => {
    try {
        return await axios.delete(`${BASE_URL()}/secure/apartments/${id}`, {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error deleting apartment:', error);
        throw error;
    }
};