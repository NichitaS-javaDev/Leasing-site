import {useState} from "react";
import {LeasingItemType} from "../components/enum/LeasingItemTypeEnum";

export function useCalculateMonthlyPayment({item, carPrice, downPayment, interestRates, loanTerm}) {
    const [monthlyPayment, setMonthlyPayment] = useState(1350);
    const [insurance, setInsurance] = useState(405)

    const calculateMonthlyPayment = () => {
        let rate;
        switch (item) {
            case LeasingItemType.Auto:
                rate = interestRates.carRate;
                break;
            case LeasingItemType.Apartments:
                rate = interestRates.apartmentRate;
                break;
            case LeasingItemType.FarmEquipment:
                rate = interestRates.farmRate;
                break;
            default:
                rate = interestRates.carRate;
        }

        const principal = carPrice - downPayment;
        const monthlyInterestRate = (rate / 100) / 12;
        const monthPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
        setMonthlyPayment(monthPayment.toFixed(2));
        setInsurance((carPrice * 0.034).toFixed(2));
    }

    return {
        monthlyPayment,
        insurance,
        calculateMonthlyPayment
    }
}