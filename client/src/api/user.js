import axios from "axios";
import {useServerHost} from "../hooks/useServerHost";

const BASE_URL = () => {
    const {BASE_URL} = useServerHost()
    return BASE_URL;
}

// const calculatePayloadSize = (data) => {
//     const dataSizeInBytes = new Blob([JSON.stringify(data)]).size;
//     return dataSizeInBytes / 1024; //KB
// };

export const login = async (username, password) => {
    try {
        return await axios.post(`${BASE_URL()}/login`, {
                username, password
            },
            {
                withCredentials: true
            });
    } catch (error) {
        console.error('Login error:', error);
        throw error
    }
}

export const getCurrentUserRole = async () => {
    try {
        return await axios.get(`${BASE_URL()}/currentUserRole`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching user role:', error);
        throw error;
    }
};

export const getCurrentUsername = async () => {
    try {
        const response = await axios.get(`${BASE_URL()}/currentUsername`, {
            withCredentials: true
        });

        return response.data.username;
    } catch (error) {
        console.error('Error fetching username:', error);
        throw error;
    }
};

export const getIsAuthorized = async () => {
    try {
        return await axios.get(`${BASE_URL()}/isAuthorized`, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error fetching auth status:', error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        return await axios.get(`${BASE_URL()}/logout`, {
            withCredentials: true
        })
    } catch (error) {
        console.error('Error sign out:', error);
        throw error;
    }
}