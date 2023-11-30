import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faEllipsis, faPen} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useCurrentClient} from "../../hooks/useCurrentClient";
import ConfirmUpdatePersonalDataModal from "./ConfirmUpdatePersonalDataModal";

export default function ClientPersonalDataBox() {
    const [renderKey, setRenderKey] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const handleEditClick = () => setIsDisabled(!isDisabled);
    const {clientDetails, setClientDetails, isDataApproved} = useCurrentClient(renderKey);

    const [showConfirmUpdateModal, setShowConfirmUpdateModal] = useState(false);
    const handleConfirmUpdateShow = (event) => {
        event.preventDefault();
        setShowConfirmUpdateModal(true);
        handleEditClick();
    }
    const handleConfirmUpdateClose = () => setShowConfirmUpdateModal(false);
    const handleRerender = () => setRenderKey(prevKey => prevKey + 1);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setClientDetails({...clientDetails, [name]: value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setClientDetails({...clientDetails, passport: base64String});
        };

        reader.readAsDataURL(file);
    };

    return (
        <>
            <Form onSubmit={handleConfirmUpdateShow}>
                <div className={'d-flex'}>
                    <Form.Group className={'client-data-form-group-l1'}>
                        <Form.Label className={'ms-1'}>Nume</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.name}
                            name="name"
                            onChange={handleInputChange}
                            className={'client-data-name-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group-l1'}>
                        <Form.Label className={'ms-1'}>Prenume</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.surname}
                            name="surname"
                            onChange={handleInputChange}
                            className={'client-data-name-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex'}>
                    <Form.Group className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>IDNP</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails._id}
                            name="idnp"
                            onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Telefon mobil</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.tel}
                            name="tel"
                            onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Email</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.email}
                            name="firstName"
                            onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex'}>
                    <Form.Group className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Data nasterii</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.birthday}
                            name="birthday"
                            className={'client-data-pers-info-control'}
                            disabled={true}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Nationalitate</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.nationality}
                            name="nationality"
                            className={'client-data-pers-info-control'}
                            disabled={true}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Sex</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.gender}
                            name="gender"
                            className={'client-data-pers-info-control'}
                            disabled={true}
                            required
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex'}>
                    <Form.Group className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Numele angajatorului</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.employer}
                            name="employer"
                            onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Functie</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.function}
                            name="function"
                            onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                    <Form.Group className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Venit mediu</Form.Label>
                        <Form.Control
                            type={'text'}
                            value={clientDetails.avgSalary.toLocaleString('en-US')}
                            name="avgSalary"
                            onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlId="img" className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Buletin</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={'client-pass-pic'}
                            style={{width: '90%'}}
                            disabled={isDisabled}
                            required
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex justify-content-end mt-4 me-4'} key={renderKey}>
                    <Button variant={"light"} className={'border-0 bg-transparent me-4 client-btn'}
                            onClick={handleEditClick} disabled={!isDataApproved}>
                        <FontAwesomeIcon icon={faPen}/>
                    </Button>
                    {isDataApproved &&
                        <Button variant={"light"} className={'border-0 bg-transparent client-btn'}
                                type={"submit"} disabled={isDisabled}>
                            <FontAwesomeIcon fontVariant={'solid'} icon={faCircleCheck} className={'me-2'}/>
                            Actualizare
                        </Button>
                    }
                    {!isDataApproved &&
                        <Button variant={"light"} className={'border-0 bg-transparent client-btn'} disabled={true}>
                            <FontAwesomeIcon fontVariant={'solid'} icon={faEllipsis} className={'me-2'}/>
                            <span style={{fontSize: '90%'}}>Waiting for approval</span>
                        </Button>
                    }
                </div>
            </Form>
            <ConfirmUpdatePersonalDataModal show={showConfirmUpdateModal}
                                            onHide={handleConfirmUpdateClose}
                                            handleRerender={handleRerender}
                                            clientDetails={clientDetails}/>
        </>
    )
}