import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function ClientPersonalDataBox() {
    const [isDisabled, setIsDisabled] = useState(true);
    const handleEditClick = () => setIsDisabled(!isDisabled);

    return (
        <>
            <Form>
            <div className={'d-flex'}>
                <Form.Group controlId="name" className={'client-data-form-group-l1'}>
                    <Form.Label className={'ms-1'}>Nume</Form.Label>
                    <Form.Control
                        type={'text'}
                        // placeholder="Introduceti modelul"
                        name="firstName"
                        // value={farmEquipmentDetails.model}
                        // onChange={handleInputChange}
                        className={'client-data-name-control'}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="name" className={'client-data-form-group-l1'}>
                    <Form.Label className={'ms-1'}>Prenume</Form.Label>
                    <Form.Control
                        type={'text'}
                        // placeholder="Introduceti modelul"
                        name="firstName"
                        // value={farmEquipmentDetails.model}
                        // onChange={handleInputChange}
                        className={'client-data-name-control'}
                        required
                    />
                </Form.Group>
            </div>
                <div className={'d-flex'}>
                    <Form.Group controlId="name" className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>IDNP</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Telefon mobil</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Email</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-contact-control'}
                            required
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex'}>
                    <Form.Group controlId="name" className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Data nasterii</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-pers-info-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Nationalitate</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-pers-info-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Sex</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-pers-info-control'}
                            required
                        />
                    </Form.Group>
                </div>
                {/*<div className={'d-flex'}>*/}
                {/*    <Form.Group controlId="name" className={'client-data-form-group-f'}>*/}
                {/*        <Form.Label className={'ms-1'}>ID</Form.Label>*/}
                {/*        <Form.Control*/}
                {/*            type={'text'}*/}
                {/*            // placeholder="Introduceti modelul"*/}
                {/*            name="firstName"*/}
                {/*            // value={farmEquipmentDetails.model}*/}
                {/*            // onChange={handleInputChange}*/}
                {/*            className={'client-data-id-control'}*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </Form.Group>*/}
                {/*    <Form.Group controlId="name" className={'client-data-form-group'}>*/}
                {/*        <Form.Label className={'ms-1'}>IDNP</Form.Label>*/}
                {/*        <Form.Control*/}
                {/*            type={'text'}*/}
                {/*            // placeholder="Introduceti modelul"*/}
                {/*            name="firstName"*/}
                {/*            // value={farmEquipmentDetails.model}*/}
                {/*            // onChange={handleInputChange}*/}
                {/*            className={'client-data-id-control'}*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </Form.Group>*/}
                {/*    <Form.Group controlId="name" className={'client-data-form-group'}>*/}
                {/*        <Form.Label className={'ms-1'}>№ Permisului de conducere</Form.Label>*/}
                {/*        <Form.Control*/}
                {/*            type={'text'}*/}
                {/*            // placeholder="Introduceti modelul"*/}
                {/*            name="firstName"*/}
                {/*            // value={farmEquipmentDetails.model}*/}
                {/*            // onChange={handleInputChange}*/}
                {/*            className={'client-data-id-control'}*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </Form.Group>*/}
                {/*</div>*/}
                <div className={'d-flex'}>
                    <Form.Group controlId="name" className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Numele angajatorului</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Functie</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="name" className={'client-data-form-group'}>
                        <Form.Label className={'ms-1'}>Venit mediu</Form.Label>
                        <Form.Control
                            type={'text'}
                            // placeholder="Introduceti modelul"
                            name="firstName"
                            // value={farmEquipmentDetails.model}
                            // onChange={handleInputChange}
                            className={'client-data-emp-control'}
                            required
                            disabled={isDisabled}
                        />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlId="img" className={'client-data-form-group-f'}>
                        <Form.Label className={'ms-1'}>Buletin</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            // onChange={handleImageChange}
                            className={'client-pass-pic'}
                            style={{width:'90%'}}
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex justify-content-end mt-4 me-4'}>
                    <Button variant={"light"} className={'border-0 bg-transparent me-4 client-btn'} onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faPen} />
                    </Button>
                    <Button variant={"light"} className={'border-0 bg-transparent client-btn'}>
                        <FontAwesomeIcon fontVariant={'solid'} icon={faCircleCheck} className={'me-2'}/>
                        Actualizare
                    </Button>
                </div>
            </Form>
        </>
    )
}