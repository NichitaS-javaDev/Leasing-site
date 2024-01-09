import {useEffect, useState} from "react";
import {getCurrentUserRole} from "../api/user";

export function useCurrentRole() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [isOfficer, setIsOfficer] = useState(false);

    useEffect(() => {
        const fetchCurrentUserRole = async () => {
            try {
                const response = await getCurrentUserRole();
                setIsAdmin(response.data.role === 'admin');
                setIsClient(response.data.role === 'client');
                setIsOfficer(response.data.role === 'officer')
            } catch (error) {
                // TODO: Handle error
            }
        }

        fetchCurrentUserRole();
    }, [])

    return {isAdmin, isClient, isOfficer}
}