import {Button, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import CreateCarAModal from "./CreateCarAModal";

export default function CreateACard() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Card className={'add-card d-flex justify-content-center align-items-center'}
                  onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faPlus} style={{fontSize: '3em'}}/>
            </Card>

            <CreateCarAModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </>
    )

}