import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {createApartment} from "../api/api";

export default function CreateApartmentAModal(props) {
    useEffect(() => {
        if (!props.show) {
            setApartmentDetails({
                city: '',
                sector: '',
                surface: '',
                rooms: '',
                condition: '',
                description: '',
                price: 0,
                img: ''
            });
        }
    }, [props.show]);

    const [apartmentDetails, setApartmentDetails] = useState({
        city: '',
        sector: '',
        surface: '',
        rooms: '',
        condition: '',
        description: '',
        price: 0,
        img: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setApartmentDetails({...apartmentDetails, [name]: value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setApartmentDetails({...apartmentDetails, img: base64String});
        };

        reader.readAsDataURL(file);
    };

    const handleCreateApartment = async () => {
        try {
            await createApartment(apartmentDetails);
        } catch (error) {
        }
        props.onHide();
        window.location.reload();
    };

    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered>
            <Form onSubmit={handleCreateApartment}>
                <Modal.Body>
                    <Form.Group controlId="description">
                        <Form.Label className={'ms-1'}>Descriere</Form.Label>
                        <Form.Control
                            as={"textarea"}
                            rows={1}
                            placeholder="Introduceti descrierea"
                            name="description"
                            value={apartmentDetails.description}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label className={'ms-1'}>Oras</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti orasul"
                            name="city"
                            value={apartmentDetails.city}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="sector">
                        <Form.Label className={'ms-1'}>Sector</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Introduceti sectorul"
                            name="sector"
                            value={apartmentDetails.sector}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="surface">
                        <Form.Label className={'ms-1'}>Suprafata</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti suprafata apartamentului"
                            name="surface"
                            value={apartmentDetails.surface}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="rooms">
                        <Form.Label className={'ms-1'}>Camere</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti numarul de camere"
                            name="rooms"
                            value={apartmentDetails.rooms}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="condition">
                        <Form.Label className={'ms-1'}>Conditia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti conditia apartamentului"
                            name="condition"
                            value={apartmentDetails.condition}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label className={'ms-1'}>Pret</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Introduceti pretul"
                            name="price"
                            value={apartmentDetails.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label className={'ms-1'}>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer style={{borderTop: "none", paddingTop: 0}}>
                    <Button variant='outline-danger' onClick={props.onHide}>
                        Cancel
                    </Button>
                    <Button type={"submit"} variant="outline-success">
                        Save item
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}