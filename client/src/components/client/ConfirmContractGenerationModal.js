import {Button, Form, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {generateContract} from "../../api/contract";
import {RoutesEnum} from "../enum/RoutesEnum";
import {useCalculateMonthlyPayment} from "../../hooks/useCalculateMonthlyPayment";
import {LeasingItemType} from "../enum/LeasingItemTypeEnum";

export default function ConfirmContractGenerationModal({
                                                           item,
                                                           clientDetails,
                                                           interestRates,
                                                           show,
                                                           onHide,
                                                           itemLocation
                                                       }) {
    const [term, setTerm] = useState(36);
    const [downPayment, setDownPayment] = useState(Math.round(item.price * 0.2));
    const {img, ...itemWithoutImg} = item;
    const clientFullName = clientDetails.surname.concat(' ').concat(clientDetails.name);
    const {monthlyPayment, insurance, calculateMonthlyPayment} = useCalculateMonthlyPayment({
        item: LeasingItemType.Auto,
        carPrice: item.price,
        downPayment: downPayment,
        interestRates: interestRates,
        loanTerm: term
    })

    useEffect(() => {
        calculateMonthlyPayment()
    }, [])

    const calculateTotalPrice = () => {
        return (monthlyPayment * term + downPayment).toFixed(2)
    }

    const handleGenerateContractBtn = async () => {
        if (itemLocation === RoutesEnum.cars) {
            try {
                const response = await generateContract({
                    ...itemWithoutImg,
                    clientName: clientFullName,
                    clientEmail: clientDetails.email,
                    totalPrice: calculateTotalPrice(),
                    monthlyPayment: monthlyPayment,
                    downPayment: downPayment,
                    interestRate: interestRates.carRate,
                    term: term,
                    insurance: insurance
                });
                window.open(response.data, '_self');
            } catch (error) {
            }
        }
    }

    return (
        <Modal show={show} size='lg' aria-labelledby="contained-modal-title-center" centered style={{fontSize: 17}}>
            <Form onSubmit={handleGenerateContractBtn}>
                <Modal.Body>
                    <span>Are you sure you want to enter into a leasing agreement for a period of  <input
                        type={"number"}
                        min={0}
                        max={60}
                        value={term}
                        onChange={(e) => {
                            setTerm(e.target.value)
                            calculateMonthlyPayment()
                        }}
                    /> months and <input
                        type={"number"}
                        min={Math.round(item.price * 0.2)}
                        max={100000}
                        value={downPayment}
                        onChange={(e) => {
                            setDownPayment(e.target.value)
                            calculateMonthlyPayment()
                        }}
                    /> as down payment ?</span>
                </Modal.Body>
                <Modal.Footer className={'border-0'}>
                    <Button variant={'light'} onClick={onHide}>Cancel</Button>
                    <Button type={"submit"} variant={'success'}>Generate</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}