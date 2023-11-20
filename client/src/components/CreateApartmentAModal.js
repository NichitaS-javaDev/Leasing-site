import {Button, Form, Modal} from "react-bootstrap";
import {useEffect} from "react";
import {useApartmentDetails} from "../hooks/useApartmentDetails";
import {createApartment} from "../api/apartments";

export default function CreateApartmentAModal(props) {
    const {apartmentDetails, setApartmentDetails, handleInputChange, handleImageChange} = useApartmentDetails();
    
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
    }, [props.show, setApartmentDetails]);
    
    const handleCreateApartment = async () => {
        try {
            await createApartment({...apartmentDetails});
        } catch (error) {
        }
        props.onHide();
    };

    return (
        <Modal {...props} size='lg' aria-labelledby="contained-modal-title-center" centered>
            <Form onSubmit={handleCreateApartment}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Descriere</Form.Label>
                        <Form.Control
                            as={"textarea"}
                            rows={1}
                            placeholder="Introduceti descrierea"
                            name="description"
                            value={apartmentDetails.description}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
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
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Sector</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder="Introduceti sectorul"
                            name="sector"
                            value={apartmentDetails.sector}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Suprafata</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti suprafata apartamentului"
                            name="surface"
                            value={apartmentDetails.surface}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Camere</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti numarul de camere"
                            name="rooms"
                            value={apartmentDetails.rooms}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Conditia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduceti conditia apartamentului"
                            name="condition"
                            value={apartmentDetails.condition}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Pret</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Introduceti pretul"
                            name="price"
                            value={apartmentDetails.price}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className={'ms-1'}>Image</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required
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