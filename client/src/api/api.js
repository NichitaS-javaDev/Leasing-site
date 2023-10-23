import axios from 'axios';

const BASE_URL = 'http://localhost:3005';

const getAllCars = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/cars`);
        return response;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

const getAllApartments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/apartments`);
        return response;
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

export { getAllCars, getAllApartments };
