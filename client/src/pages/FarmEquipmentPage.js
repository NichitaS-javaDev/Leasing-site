import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import UpdateDeleteACmp from "../components/admin/UpdateDeleteACmp";
import CreateACard from "../components/admin/CreateACard";
import {useCurrentRole} from "../hooks/useCurrentRole";
import {getAllFarmEquipment} from "../api/farmEquipment";
import GenerateContractCliCmp from "../components/client/GenerateContractCliCmp";

export default function FarmEquipmentPage() {
    const [farmEquipments, setFarmEquipment] = useState([]);
    const {isAdmin, isClient} = useCurrentRole();

    useEffect(() => {
        const fetchFarmEquipment = async () => {
            try {
                const response = await getAllFarmEquipment();
                setFarmEquipment(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchFarmEquipment();
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"farmEquipments-box"}>
                {farmEquipments.map((farmEquipment) => (
                    <Card className={"farmEquipment-card"}>
                        <Link to={`/details/${farmEquipment._id}`} className={"farmEquipment-card-link"}>
                            <Card.Img variant="top" src={`data:image/jpeg;base64,${farmEquipment.img}`}/>
                            <Card.Body>
                                <Card.Title><span
                                    className={"card-text-tl"}>{farmEquipment.model}</span></Card.Title>
                                <Card.Text>
                                    <div><span className={"card-text-tl"}>Motor:</span> {farmEquipment.engine}
                                    </div>
                                    <div><span className={"card-text-tl"}>Putere:</span> {farmEquipment.power}</div>
                                    <div><span className={"card-text-tl"}>Rezervor:</span> {farmEquipment.fuelTank}
                                    </div>
                                    <div><span
                                        className={"card-text-tl"}>Masa proprie:</span> {farmEquipment.weight}</div>
                                    <div><span
                                        className={"card-text-tl"}>Capacitate de încărcare:</span> {farmEquipment.payloadCapacity}
                                    </div>
                                    <div><span
                                        className={"card-text-tl"}>Pret: {farmEquipment.price.toLocaleString('en-US')} EUR</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Link>
                        {isAdmin && <UpdateDeleteACmp id={farmEquipment._id}/>}
                        {isClient && <GenerateContractCliCmp/>}
                    </Card>
                ))}
                {isAdmin && <CreateACard/>}
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}