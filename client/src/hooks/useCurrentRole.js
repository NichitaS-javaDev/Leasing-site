import {useEffect, useState} from "react";
import {getCurrentUserRole} from "../api/user";

export function useCurrentRole() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchCurrentUserRole = async () => {
            try {
                const response = await getCurrentUserRole();
                setIsAdmin(response.data.role === 'admin');
            } catch (error) {
                // TODO: Handle error
            }
        }

        fetchCurrentUserRole();
    }, [])

    return {isAdmin}
}