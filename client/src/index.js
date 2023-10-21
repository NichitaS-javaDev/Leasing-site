import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage";
import VehiclesPage from "./pages/VehiclesPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route path={"/home"} element={<MainPage/>}></Route>
                <Route path={"/vehicles"} element={<VehiclesPage/>}></Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
);
