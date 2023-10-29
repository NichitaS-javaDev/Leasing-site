import axios from 'axios';

const BASE_URL = 'http://localhost:3005';

// const calculatePayloadSize = (data) => {
//     const dataSizeInBytes = new Blob([JSON.stringify(data)]).size;
//     return dataSizeInBytes / 1024; //KB
// };

// <----- CARS ----->
export const getAllCars = async () => {
    try {
        return await axios.get(`${BASE_URL}/cars`);
    } catch (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
};

export const createCar = async (carDetails) => {
    try {
        return await axios.post(`${BASE_URL}/secure/cars`, {
                carDetails
            },
            {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error creating car:', error);
        throw error;
    }
};

export const deleteCar = async (id) => {
    try {
        return await axios.delete(`${BASE_URL}/secure/cars/${id}`, {
                withCredentials: true
            }
        );
    } catch (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
};


// <----- APARTMENTS ----->
export const getAllApartments = async () => {
    try {
        return await axios.get(`${BASE_URL}/apartments`);
    } catch (error) {
        console.error('Error fetching apartments:', error);
        throw error;
    }
};


// <----- FARM EQUIPMENT ----->
export const getAllFarmEquipment = async () => {
    try {
        return await axios.get(`${BASE_URL}/farmEquipment`);
    } catch (error) {
        console.error('Error fetching farm equipment:', error);
        throw error;
    }
};


// <----- USER ----->
export const getCurrentUserRole = async () => {
    try {
        return await axios.get(`${BASE_URL}/currentUserRole`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching user role:', error);
        throw error;
    }
};

export const getIsAuthorized = async () => {
    try {
        return await axios.get(`${BASE_URL}/isAuthorized`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching auth status:', error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        return await axios.get(`${BASE_URL}/logout`, {
            withCredentials: true
        })
    } catch (error) {
        console.error('Error sign out:', error);
        throw error;
    }
}

