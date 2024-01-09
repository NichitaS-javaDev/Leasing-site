import {useEffect, useState} from "react";
import {getClientByUsername} from "../api/client";
import {getCurrentUsername} from "../api/user";

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
            const currentUser = await getCurrentUsername();
            const response = await getClientByUsername(currentUser);
            if (response.data.profileStatus === 'pending') setIsDataApproved(false)

            setClientDetails(response.data)
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchClientData();
    }, [renderKey])

    return {clientDetails, setClientDetails, isDataApproved};
}