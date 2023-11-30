import {useEffect, useState} from "react";
import {getClientByUsername} from "../api/client";

export function useCurrentClient(renderKey) {
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
    const [isDataApproved, setIsDataApproved] = useState(true);

    const fetchClientData = async () => {
        try {
            const response = await getClientByUsername('client');
            if (response.data.profileStatus === 'pending') setIsDataApproved(false)

            setClientDetails(response.data)
        } catch (error) {
        }
    }

    // useEffect(() => {
    //     fetchClientData();
    // }, [])

    useEffect(() => {
        fetchClientData();
    }, [renderKey])

    return {clientDetails, setClientDetails, isDataApproved};
}