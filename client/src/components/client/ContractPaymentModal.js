import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {updateContract} from "../../api/contract";

export default function ContractPaymentModal({id, totalPrice, monthlyPayment, paidAmount, show, onHide}) {
    const [paymentSum, setPaymentSum] = useState(monthlyPayment.toFixed(2));

    const handlePayment = async () => {
        try {
            await updateContract({id, paymentSum})
        } catch (error) {
        }
    }

    return (
        <Modal show={show} size='lg' aria-labelledby="contained-modal-title-center" centered style={{fontSize: 17}}>
            <Form onSubmit={handlePayment}>
                <Modal.Body>
                    <span>Sunteți sigur că doriți să efectuați plata pentru acest contract in suma de <input
                        type={"number"}
                        min={monthlyPayment}
                        max={(totalPrice - paidAmount).toFixed(2)}
                        value={paymentSum}
                        onChange={(e) => {
                            setPaymentSum(e.target.value)
                        }}
                    /> EUR ?</span>
                    <div className={'d-flex justify-content-end mt-4'}>
                        <Button variant={'light'} onClick={onHide}>Cancel</Button>
                        <Button type={"submit"} variant={'success'}>Make Payment</Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}