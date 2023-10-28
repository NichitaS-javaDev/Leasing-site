import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import {getAllCars, getCurrentUserRole} from "../api/api";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import UpdateDeleteACmp from "../components/UpdateDeleteACmp";
import CreateACard from "../components/CreateACard";

function CarsPage() {
    const [cars, setCars] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await getAllCars();
                setCars(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        const fetchCurrentUserRole = async () => {
            try {
                const response = await getCurrentUserRole();
                setIsAdmin(response.data.role === 'admin');
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchCars();
        fetchCurrentUserRole()
    }, []);

    return (
        <React.Fragment>
            <Header/>
            {/*<div className={"vehicles-main-box"}>*/}
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

                                        {/*{*/}
                                        {/*    isAdmin ? <div>Admin</div> : <div>Not Admin</div>*/}
                                        {/*}*/}
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                            {isAdmin && <UpdateDeleteACmp id={car._id}/>}
                        </Card>
                    ))}
                {isAdmin && <CreateACard/>}
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}

export default CarsPage