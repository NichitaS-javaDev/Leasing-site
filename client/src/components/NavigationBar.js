import {Nav} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
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
                <LinkContainer to={RoutesEnum.index}>
                    <Nav.Link>Despre Leasing</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={RoutesEnum.cars}>
                    <Nav.Link>Autoturisme</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={RoutesEnum.apartments}>
                    <Nav.Link>Imobil</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to={RoutesEnum.farmEquipment}>
                    <Nav.Link>Tehnică Agricolă</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            {isClient &&
                <Nav.Item>
                    <LinkContainer to={RoutesEnum.clientDashboard}>
                        <Nav.Link>Cabinet Personal</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            }
            {isOfficer &&
                <Nav.Item>
                    <LinkContainer to={RoutesEnum.officerDashboard}>
                        <Nav.Link>Management</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            }
        </Nav>
    )
}