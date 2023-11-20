import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

export default function GenerateContractCliCmp() {
    return (
        <div className={'d-flex justify-content-end'}>
            <Button variant={"light"} className={'admin_btn'}>
                <FontAwesomeIcon icon={faFileSignature}/>
            </Button>
        </div>
    )
}