import axios from 'axios';

const BASE_URL = 'http://localhost:3005';

const getAllCars = async () => {
    try {
        return await axios.get(`${BASE_URL}/cars`);
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

const deleteCar = async (id) => {
    try {
        return await axios.delete(`${BASE_URL}/secure/cars/${id}`,{
            withCredentials:true
            }
        );
    } catch (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
};

const getAllApartments = async () => {
    try {
        return await axios.get(`${BASE_URL}/apartments`);
    } catch (error) {
        console.error('Error fetching apartments:', error);
        throw error;
    }
};

const getAllFarmEquipment = async () => {
    try {
        return await axios.get(`${BASE_URL}/farmEquipment`);
    } catch (error) {
        console.error('Error fetching farm equipment:', error);
        throw error;
    }
};

const getCurrentUserRole = async () => {
    try {
        return await axios.get(`${BASE_URL}/currentUserRole`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching user role:', error);
        throw error;
    }
};

const getIsAuthorized = async () => {
    try {
        return await axios.get(`${BASE_URL}/isAuthorized`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching auth status:', error);
        throw error;
    }
};

const signOut = async () => {
    try {
        return await axios.get(`${BASE_URL}/logout`, {
            withCredentials: true
        })
    } catch (error){
        console.error('Error sign out:', error);
        throw error;
    }
}

export { getAllCars, getAllApartments, getAllFarmEquipment, getCurrentUserRole, getIsAuthorized, signOut , deleteCar};
