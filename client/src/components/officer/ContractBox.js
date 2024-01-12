import React, {useEffect, useState} from "react";
import {signContract, viewContract} from "../../api/contract";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faExpand} from "@fortawesome/free-solid-svg-icons";
import {getClientByUsername} from "../../api/client";

export default function ContractBox({contract}) {
    const [ownerName, setOwnerName] = useState("");
    const [ownerIDNP, setOwnerIDNP] = useState("");

    useEffect(() => {
        const fetchClientInfo = async () => {
            const client = await getClientByUsername(contract.owner);
            const fullName = `${client.data.name} ${client.data.surname}`;
            setOwnerName(fullName);
            setOwnerIDNP(client.data._id);
        }

        fetchClientInfo(contract.owner);
    }, []);

    const isApproved = () => {
        return contract.status === 'approved';
    }

    const handleViewContractBtn = async (docId) => {
        try {
            const response = await viewContract(docId)
            const pdfDataUrl = `data:application/pdf;base64,${response.data}`;
            const newTab = window.open();
            newTab.document.write(
                `<iframe style="position:fixed; 
                        top:0; left:0; bottom:0; right:0; 
                        width:100%; height:100%; border:none; 
                        margin:0; padding:0; overflow:hidden; z-index:1;" 
                        src='${pdfDataUrl}'>
                </iframe>`);
        } catch (error) {
        }
    }

    const handleSignContractBtn = async (docId) => {
        try {
            const response = await signContract(docId);
            window.open(response.data, '_self');
        } catch (error) {
        }
    }

    return (
        <>
            <Card className={"contract-card"}>
                <Card.Img variant="top" src={`data:image/jpeg;base64,${contract.img}`}/>
                <Card.Body>
                    <Card.Title><span className={"card-text-tl"}>{contract.model}</span></Card.Title>
                    <Card.Text>
                        <div className={'mt-3'}>
                            <span className={"card-text-tl"}>Client: </span>{ownerName}
                        </div>
                        <div className={'mt-2'}>
                            <span className={"card-text-tl"}>Client IDNP: </span>{ownerIDNP}
                        </div>
                        <div className={'mt-2'}>
                                    <span
                                        className={"card-text-tl"}>Pret total: {contract.totalPrice.toLocaleString('en-US')} EUR
                                    </span>
                        </div>
                    </Card.Text>
                </Card.Body>
                <div className={'d-flex justify-content-end'}>
                    <Button variant={'light'} className={'admin_btn'}>
                        <FontAwesomeIcon icon={faExpand} onClick={() => handleViewContractBtn(contract.docId)}/>
                    </Button>
                    {!isApproved(contract.status) &&
                        <Button variant={'light'} className={'admin_btn'}>
                            <FontAwesomeIcon icon={faCheck} onClick={() => handleSignContractBtn(contract.docId)}/>
                        </Button>
                    }
                </div>
            </Card>
        </>
    )
}