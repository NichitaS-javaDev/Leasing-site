import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import CarsPage from "./pages/CarsPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import FarmEquipmentPage from "./pages/FarmEquipmentPage";
import LoginPage from "./pages/LoginPage";
import {RoutesEnum} from "./components/enum/RoutesEnum";
import ClientDashboard from "./pages/ClientDashboard";
import OfficerDashboard from "./pages/OfficerDashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path={`${RoutesEnum.index}`} element={<MainPage/>}></Route>
                <Route path={`${RoutesEnum.cars}`} element={<CarsPage/>}></Route>
                <Route path={`${RoutesEnum.apartments}`} element={<ApartmentsPage/>}></Route>
                <Route path={`${RoutesEnum.farmEquipment}`} element={<FarmEquipmentPage/>}></Route>
                <Route path={`${RoutesEnum.login}`} element={<LoginPage/>}></Route>
                <Route path={`${RoutesEnum.clientDashboard}`} element={<ClientDashboard/>}></Route>
                <Route path={`${RoutesEnum.officerDashboard}`} element={<OfficerDashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
);
