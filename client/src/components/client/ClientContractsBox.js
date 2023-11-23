import React, {useEffect, useState} from 'react'
// import Header from "../components/Header";
import Card from "react-bootstrap/Card";
// import {Link, useLocation} from 'react-router-dom';
// import UpdateDeleteACmp from "../components/admin/UpdateDeleteACmp";
// import CreateACard from "../components/admin/CreateACard";
// import {useCurrentRole} from "../hooks/useCurrentRole";
// import {getAllCars} from "../api/car";
// import GenerateContractCmp from "../components/client/GenerateContractCmp";
// import {useCurrentClient} from "../hooks/useCurrentClient";
// import {useInterestRates} from "../hooks/useInterestRates";
import {getAllContracts} from "../../api/contract";
import {Button, ProgressBar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard, faExpand} from "@fortawesome/free-solid-svg-icons";


export default function ClientContractsBox() {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await getAllContracts();
                setContracts(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchContracts();
    }, []);

    return (
        <>
            {contracts.map((contract) => (
                <Card className={"contract-card"}>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${contract.img}`}/>
                    <Card.Body>
                        <Card.Title><span className={"card-text-tl"}>{contract.model}</span></Card.Title>
                        <Card.Text>
                            <div className={'mt-3'}>
                                    <span
                                        className={"card-text-tl"}>Pret total: {contract.totalPrice.toLocaleString('en-US')} EUR
                                    </span>
                            </div>
                            <div className={'mt-2'}>
                                    <span
                                        className={"card-text-tl"}>Suma achitata: {contract.paidAmount.toLocaleString('en-US')} EUR
                                    </span>
                            </div>
                            <ProgressBar now={Math.round(contract.paidAmount / contract.totalPrice * 100)}
                                         className={'mt-3'}/>
                        </Card.Text>

                    </Card.Body>
                    <div className={'d-flex justify-content-end'}>
                        <Button variant={'light'} className={'admin_btn'}>
                            <FontAwesomeIcon icon={faExpand}/>
                        </Button>
                        <Button variant={'light'} className={'admin_btn'}>
                            <FontAwesomeIcon icon={faCreditCard}/>
                        </Button>
                    </div>
                </Card>
            ))}
        </>
    )
}
