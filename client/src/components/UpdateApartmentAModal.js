import {useApartmentDetails} from "../hooks/useApartmentDetails";
import {Button, Form, Modal} from "react-bootstrap";
import {useEffect} from "react";
import {getApartmentById, updateApartment} from "../api/apartments";

export default function UpdateApartmentAModal(props){
    const {apartmentDetails, setApartmentDetails, handleInputChange, handleImageChange} = useApartmentDetails();

    useEffect(() => {
        const fetchApartment = async () => {
            try {
                const response = await getApartmentById(props.id);
                setApartmentDetails(response.data);
            } catch (error) {
                // TODO: Handle error
            }
        }

        fetchApartment()
    }, [props.id, setApartmentDetails])

    const handleUpdate = async () => {
        try {
            await updateApartment({...apartmentDetails})
        } catch (error) {

        }
        props.onHide();
    }

    return (
        <Modal show={props.show} onHide={props.onHide} size='lg' aria-labelledby="contained-modal-title-center" centered>
            <Form onSubmit={handleUpdate}>
                <Modal.Body>
                    <Form.Group controlId="description">
                        <Form.Label className={'ms-1'}>Descriere</Form.Label>
                        <Form.Control
                            as={"textarea"}
                            rows={1}
                            placeholder={apartmentDetails.description}
                            name="description"
                            value={apartmentDetails.description}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="city">
                        <Form.Label className={'ms-1'}>Oras</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={apartmentDetails.city}
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
                            placeholder={apartmentDetails.sector}
                            name="sector"
                            value={apartmentDetails.sector}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="surface">
                        <Form.Label className={'ms-1'}>Suprafata</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={apartmentDetails.surface}
                            name="surface"
                            value={apartmentDetails.surface}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="rooms">
                        <Form.Label className={'ms-1'}>Camere</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={apartmentDetails.rooms}
                            name="rooms"
                            value={apartmentDetails.rooms}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="condition">
                        <Form.Label className={'ms-1'}>Conditia</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder={apartmentDetails.condition}
                            name="condition"
                            value={apartmentDetails.condition}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label className={'ms-1'}>Pret</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder={apartmentDetails.price}
                            name="price"
                            value={apartmentDetails.price}
                            onChange={handleInputChange}
                            required
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
                        Update item
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}