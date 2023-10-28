import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import CarsPage from "./pages/CarsPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import FarmEquipmentPage from "./pages/FarmEquipmentPage";
import LoginPage from "./pages/LoginPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainPage/>}></Route>
                <Route path={"/cars"} element={<CarsPage/>}></Route>
                <Route path={"/apartments"} element={<ApartmentsPage/>}></Route>
                <Route path={"/farmEquipment"} element={<FarmEquipmentPage/>}></Route>
                <Route path={"/login"} element={<LoginPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
);
