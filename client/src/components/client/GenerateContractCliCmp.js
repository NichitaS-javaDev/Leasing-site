import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import ConfirmContractGenerationModal from "./ConfirmContractGenerationModal";
import {useState} from "react";

export default function GenerateContractCliCmp({car, clientDetails}) {
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleConfirmModalClose = () => {
        setShowConfirmModal(false)
    }
    const handleConfirmModalOpen = () => {
        setShowConfirmModal(true)
    }

    return (
        <>
            <div className={'d-flex justify-content-end'}>
                <Button variant={"light"} className={'admin_btn'} onClick={handleConfirmModalOpen}>
                    <FontAwesomeIcon icon={faFileSignature}/>
                </Button>
            </div>
            <ConfirmContractGenerationModal car={car}
                                            clientDetails={clientDetails}
                                            show={showConfirmModal}
                                            onHide={handleConfirmModalClose}/>
        </>
    )
}