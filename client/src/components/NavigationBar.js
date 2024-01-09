import {Nav} from "react-bootstrap";
import {RoutesEnum} from "./enum/RoutesEnum";
import React from "react";
import {useLocation} from "react-router-dom";
import {useCurrentRole} from "../hooks/useCurrentRole";

export default function NavigationBar(){
    const location = useLocation();
    const activeKey = location.pathname;
    const {isClient, isOfficer} = useCurrentRole();

    return(
        <Nav fill variant="tabs" defaultActiveKey={activeKey} className="custom-nav">
            <Nav.Item>
                <Nav.Link href={`${RoutesEnum.index}`}>Despre Leasing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${RoutesEnum.cars}`}>Autoturisme</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${RoutesEnum.apartments}`}>Imobil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={`${RoutesEnum.farmEquipment}`}>Tehnică Agricolă</Nav.Link>
            </Nav.Item>
            {isClient &&
                <Nav.Item>
                    <Nav.Link href={`${RoutesEnum.clientDashboard}`}>Cabinet Personal</Nav.Link>
                </Nav.Item>
            }
            {isOfficer &&
                <Nav.Item>
                    <Nav.Link href={`${RoutesEnum.officerDashboard}`}>Management</Nav.Link>
                </Nav.Item>
            }
        </Nav>
    )
}