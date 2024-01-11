import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";
import {getAllContractsByUsername, viewContract} from "../../api/contract";
import {Button, ProgressBar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCreditCard, faExpand} from "@fortawesome/free-solid-svg-icons";
import ContractPaymentModal from "./ContractPaymentModal";
import {getCurrentUsername} from "../../api/user";

export default function ClientContractsBox() {
    const [contracts, setContracts] = useState([]);
    const [selectedContract, setSelectedContract] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);

    const handleModalClose = () => {
        setShowPaymentModal(false)
    }
    const handleModalOpen = (contract) => {
        setSelectedContract(contract)
        setShowPaymentModal(true)
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

    useEffect(() => {
        const fetchContracts = async () => {
            const username = await getCurrentUsername();
            try {
                const response = await getAllContractsByUsername(username);
                setContracts(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        };

        fetchContracts();
    }, []);

    return (
        <>
            {contracts.map((contract) => (
                <Card className={"contract-card"}>
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${contract.img}`}/>
                    <Card.Body>
                        <Card.Title><span className={"card-text-tl"}>{contract.model}</span></Card.Title>
                        <Card.Text>
                            <div className={'mt-3'}>
                                    <span
                                        className={"card-text-tl"}>Pret total: {contract.totalPrice.toLocaleString('en-US')} EUR
                                    </span>
                            </div>
                            <div className={'mt-2'}>
                                    <span
                                        className={"card-text-tl"}>Plata lunara: {contract.monthlyPayment.toLocaleString('en-US')} EUR
                                    </span>
                            </div>
                            <div className={'mt-2'}>
                                    <span
                                        className={"card-text-tl"}>Suma achitata: {contract.paidAmount.toLocaleString('en-US')} EUR
                                    </span>
                            </div>
                            <ProgressBar now={Math.round(contract.paidAmount / contract.totalPrice * 100)}
                                         className={'mt-3'}/>
                        </Card.Text>
                    </Card.Body>
                    <div className={'d-flex justify-content-end'}>
                        <Button variant={'light'} className={'admin_btn'}>
                            <FontAwesomeIcon icon={faExpand} onClick={() => handleViewContractBtn(contract.docId)}/>
                        </Button>
                        <Button variant={'light'} className={'admin_btn'}>
                            <FontAwesomeIcon icon={faCreditCard} onClick={() => handleModalOpen(contract)}/>
                        </Button>
                    </div>
                </Card>
            ))}
            {
                selectedContract !== null &&
                <ContractPaymentModal id={selectedContract._id}
                                      monthlyPayment={selectedContract.monthlyPayment}
                                      paidAmount={selectedContract.paidAmount}
                                      totalPrice={selectedContract.totalPrice}
                                      show={showPaymentModal}
                                      onHide={handleModalClose}
                                      key={selectedContract._id}/>
            }
        </>
    )
}
