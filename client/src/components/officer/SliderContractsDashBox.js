import ContractsSlider from "./ContractsSlider";
import {useEffect, useState} from "react";
import {getAllContractsByStatus} from "../../api/contract";
import {Divider} from "@mui/material";

export default function SliderContractsDashBox() {
    const [pendingContracts, setPendingContracts] = useState([]);
    const [approvedContracts, setApprovedContracts] = useState([]);

    useEffect(() => {
        const fetchPendingContracts = async () => {
            try {
                const response = await getAllContractsByStatus('pending');
                setPendingContracts(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        const fetchApprovedContracts = async () => {
            try {
                const response = await getAllContractsByStatus('approved');
                setApprovedContracts(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchPendingContracts();
        fetchApprovedContracts();
    }, []);


    return (
        <>
            <Divider sx={{
                color: '#212529',
                width: '96%',
                margin: '0.5% 1% 1.5%',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                borderBottomWidth: 5
            }} textAlign="left">Pending</Divider>
            <ContractsSlider contracts={pendingContracts}/>
            <Divider sx={{
                color: '#212529',
                width: '96%',
                margin: '2.5% 1% 1.2%',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                borderBottomWidth: 5
            }} textAlign="left">Approved</Divider>
            <ContractsSlider contracts={approvedContracts}/>
        </>
    )
}