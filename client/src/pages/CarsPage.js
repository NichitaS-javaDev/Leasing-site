import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import UpdateDeleteACmp from "../components/UpdateDeleteACmp";
import CreateACard from "../components/CreateACard";
import {useCurrentRole} from "../hooks/useCurrentRole";
import {getAllCars} from "../api/car";
import GenerateContractCliCmp from "../components/GenerateContractCliCmp";

export default function CarsPage() {
    const [cars, setCars] = useState([]);
    const {isAdmin, isClient} = useCurrentRole();

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
                        <Link to={`/details/${car._id}`} className={"vehicle-card-link"}>
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
                        </Link>
                        {isAdmin && <UpdateDeleteACmp id={car._id}/>}
                        {isClient && <GenerateContractCliCmp {...car}/>}
                    </Card>
                ))}
                {isAdmin && <CreateACard/>}
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}
