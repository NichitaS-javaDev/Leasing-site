import {useEffect, useState} from "react";
import {getClientByUsername} from "../api/client";

export function useCurrentClient() {
    const [clientDetails, setClientDetails] = useState({
        _id: '',
        name: '',
        surname: '',
        tel: '',
        email: '',
        birthday: '',
        nationality: '',
        gender: '',
        employer: '',
        function: '',
        avgSalary: 0,
        passport: '',
        profileStatus: '',
        username: ''
    });

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const response = await getClientByUsername('client');
                setClientDetails(response.data)
            } catch (error) {

            }
        }

        fetchClientData();
    }, [])

    return {clientDetails, setClientDetails};
}