import React, {useEffect, useState} from 'react'
import Header from "../components/Header";
import GridBoxes from "../components/GridBoxes";
import {getAllCars} from "../client/api";

function VehiclesPage() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const cars = await getAllCars();
                setCars(cars);
            } catch (error) {
                // Handle error
            }
        };

        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <Header/>
            <div className={"vehicles-main-box"}>
                <div className={"vehicles-box"}>
                    <GridBoxes/>
                </div>
                <div className={"filter-box"}>

                </div>
            </div>
        </React.Fragment>
    )
}

export default VehiclesPage