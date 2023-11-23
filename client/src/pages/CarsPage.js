import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import {useLocation} from 'react-router-dom';
import UpdateDeleteACmp from "../components/admin/UpdateDeleteACmp";
import CreateACard from "../components/admin/CreateACard";
import {useCurrentRole} from "../hooks/useCurrentRole";
import {getAllCars} from "../api/car";
import GenerateContractCmp from "../components/client/GenerateContractCmp";
import {useCurrentClient} from "../hooks/useCurrentClient";
import {useInterestRates} from "../hooks/useInterestRates";

export default function CarsPage() {
    const location = useLocation();
    const [cars, setCars] = useState([]);
    const {isAdmin, isClient} = useCurrentRole();
    const {interestRates} = useInterestRates();
    const {clientDetails} = useCurrentClient();

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAllCars();
                setCars(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"vehicles-box"}>
                {cars.map((car) => (
                    <Card className={"vehicle-card"}>
                        {/*<Link to={`/details/${car._id}`} className={"vehicle-card-link"}>*/}
                            <Card.Img variant="top" src={`data:image/jpeg;base64,${car.img}`}/>
                            <Card.Body>
                                <Card.Title><span className={"card-text-tl"}>{car.model}</span></Card.Title>
                                <Card.Text>
                                    <div><span className={"card-text-tl"}>Configuratie:</span> {car.description}
                                    </div>
                                    <div><span className={"card-text-tl"}>Tip motor:</span> {car.fuel}</div>
                                    <div><span className={"card-text-tl"}>Cutie de viteze:</span> {car.transmission}
                                    </div>
                                    <div><span className={"card-text-tl"}>An fabricatie:</span> {car.year}</div>
                                    <div><span className={"card-text-tl"}>Culoare:</span> {car.color}</div>
                                    <div><span
                                        className={"card-text-tl"}>Pret: {car.price.toLocaleString('en-US')} EUR</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        {/*</Link>*/}
                        {isAdmin && <UpdateDeleteACmp id={car._id}/>}
                        {isClient && <GenerateContractCmp item={car}
                                                          clientDetails={clientDetails}
                                                          interestRates={interestRates}
                                                          itemLocation={location.pathname}/>}
                    </Card>
                ))}
                {isAdmin && <CreateACard/>}
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}
