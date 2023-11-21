import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import UpdateDeleteACmp from "../components/admin/UpdateDeleteACmp";
import CreateACard from "../components/admin/CreateACard";
import {useCurrentRole} from "../hooks/useCurrentRole";
import {getAllApartments} from "../api/apartment";
import GenerateContractCliCmp from "../components/client/GenerateContractCliCmp";

export default function ApartmentsPage() {
    const [apartments, setApartments] = useState([]);
    const {isAdmin, isClient} = useCurrentRole();

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await getAllApartments();
                setApartments(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchApartments();
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"apartments-box"}>
                {apartments.map((apartment) => (
                    <Card className={"apartment-card"}>
                        <Link to={`/details/${apartment._id}`} className={"apartment-card-link"}>
                            <Card.Img variant="top" src={`data:image/jpeg;base64,${apartment.img}`}/>
                            <Card.Body>
                                <Card.Title><span
                                    className={"card-text-tl"}>{apartment.description}</span></Card.Title>
                                <Card.Text>
                                    <div><span className={"card-text-tl"}>Oras:</span> {apartment.city}
                                    </div>
                                    <div><span className={"card-text-tl"}>Sector:</span> {apartment.sector}</div>
                                    <div><span className={"card-text-tl"}>Suprafata:</span> {apartment.surface}
                                    </div>
                                    <div><span className={"card-text-tl"}>Camere:</span> {apartment.rooms}</div>
                                    <div><span className={"card-text-tl"}>Conditie:</span> {apartment.condition}
                                    </div>
                                    <div><span
                                        className={"card-text-tl"}>Pret: {apartment.price.toLocaleString('en-US')} EUR</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Link>
                        {isAdmin && <UpdateDeleteACmp id={apartment._id}/>}
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