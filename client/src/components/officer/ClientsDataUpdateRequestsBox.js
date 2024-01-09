import Card from "react-bootstrap/Card";
import React, {useEffect, useState} from "react";
import {Button, Col, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-regular-svg-icons";
import {approveNewClientData, getAllClients, rejectNewClientData} from "../../api/client";
import {useNavigate} from "react-router-dom";

export default function ClientsDataUpdateRequestsBox() {
    const navigate = useNavigate();
    const [updateRequests, setUpdateRequests] = useState([]);

    useEffect(() => {
        const fetchUpdateRequests = async () => {
            try {
                const response = await getAllClients();
                setUpdateRequests(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchUpdateRequests();
    }, []);

    const handleApproveBtnClick = async (id) => {
        await approveNewClientData(id);
        navigate(0);
    }

    const handleRejectBtnClick = async (id) => {
        await rejectNewClientData(id);
        navigate(0);
    }

    return (
        <>
            <div className={"new-client-info-box"}>
                {updateRequests.map((info) => (
                    <Card className={"client-info-card mb-4"}>
                        <Row>
                            <Col>
                                <Card.Img variant="top" src={`data:image/jpeg;base64,${info.passport}`}
                                          style={{width: '75%'}}/>
                            </Col>
                            <Col>
                                <div className={"mt-2"}><span
                                    className={"card-text-tl"}>Nume:</span> {info.name + ' ' + info.surname}
                                </div>
                                <div className={"mt-2"}><span className={"card-text-tl"}>IDNP:</span> {info._id}</div>
                                <div className={"mt-2"}><span
                                    className={"card-text-tl"}>Telefon mobil:</span> {info.tel}
                                </div>
                                <div className={"mt-2"}><span className={"card-text-tl"}>Email:</span> {info.email}
                                </div>
                            </Col>
                            <Col>
                                <div className={"mt-2"}><span
                                    className={"card-text-tl"}>Numele angajatorului:</span> {info.employer}</div>
                                <div className={"mt-2"}><span className={"card-text-tl"}>Functie:</span> {info.function}
                                </div>
                                <div className={"mt-2"}>
                                    <span
                                        className={"card-text-tl"}>Venit mediu: {info.avgSalary.toLocaleString('en-US')} MDL
                                    </span>
                                </div>
                            </Col>
                            <Col xs={1}>
                                <Row>
                                    <Button className={'approve-reqs-btn bg-transparent border-0 mt-4 p-0 text-success'}
                                            variant="light"
                                            onClick={() => handleApproveBtnClick(info._id)}>
                                        <FontAwesomeIcon icon={faCircleCheck} size={"2x"}/>
                                    </Button>
                                </Row>
                                <Row>
                                    <Button className={'approve-reqs-btn bg-transparent border-0 mt-4 text-danger'}
                                            variant="light"
                                            onClick={() => handleRejectBtnClick(info._id)}>
                                        <FontAwesomeIcon icon={faCircleXmark} size={"2x"}/>
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </div>
        </>
    )
}