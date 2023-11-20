import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
import {getClientByUsername} from "../api/clients";

export default function ClientPersonalDataBox() {
    const [isDisabled, setIsDisabled] = useState(true);
    const handleEditClick = () => setIsDisabled(!isDisabled);
    const [clientDetails, setClientDetails] = useState({
        _id: '',
        name: '',
        surname: '',
        tel: '',
        email: '',
        birthday: '',
        nationality: '',
        gender: '',
        employer: '',
        function: '',
        avgSalary: 0,
        passport: '',
        profileStatus: '',
        username: ''
    });

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const response = await getClientByUsername('client');
                setClientDetails(response.data)
            } catch (error) {

            }
        }

        fetchClientData();
    })

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
            <Form>
                <div className={'d-flex'}>
                    <Form.Group className={'client-data-form-group-l1'}>
                        <Form.Label className={'ms-1'}>Nume</Form.Label>
                        <Form.Control
                            type={'text'}
                            placeholder={clientDetails.name}
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
                            placeholder={clientDetails.surname}
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
                            placeholder={clientDetails._id}
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
                            placeholder={clientDetails.tel}
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
                            placeholder={clientDetails.email}
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
                            placeholder={clientDetails.birthday}
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
                            placeholder={clientDetails.nationality}
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
                            placeholder={clientDetails.gender}
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
                            placeholder={clientDetails.employer}
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
                            placeholder={clientDetails.function}
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
                            type={'number'}
                            placeholder={clientDetails.avgSalary.toLocaleString('en-US')}
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
                        />
                    </Form.Group>
                </div>
                <div className={'d-flex justify-content-end mt-4 me-4'}>
                    <Button variant={"light"} className={'border-0 bg-transparent me-4 client-btn'}
                            onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faPen}/>
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