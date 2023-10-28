import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import {getAllApartments, getCurrentUserRole} from "../api/api";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import UpdateDeleteACmp from "../components/UpdateDeleteACmp";

function ApartmentsPage() {
    const [apartments, setApartments] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchApartments = async () => {
            try {
                const response = await getAllApartments();
                setApartments(response.data);
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

        fetchApartments();
        fetchCurrentUserRole();
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"apartments-main-box"}>
                <div className={"apartments-box"}>
                    {apartments.map((apartment) => (
                        <Link to={`/details/${apartment._id}`} className={"apartment-card-link"}>
                            <Card className={"apartment-card"}>
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
                                        {isAdmin && <UpdateDeleteACmp/>}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ApartmentsPage