import React, {useState} from 'react';

export default function LeasingCalc() {
    const [item, setItem] = useState('auto');
    const [carPrice, setCarPrice] = useState(50000);
    const [downPayment, setDownPayment] = useState(Math.round(carPrice * 0.2));
    const [loanTerm, setLoanTerm] = useState(36);
    const [monthlyPayment, setMonthlyPayment] = useState(1350);
    const [insurance, setInsurance] = useState(405)

    const handleItemChange = (e) => {
        setItem(e.target.value);
    }

    const calculateMonthlyPayment = () => {
        let interestRate;
        switch (item) {
            case 'auto':
                interestRate = 12;
                break;
            case 'imobil':
                interestRate = 13.5;
                break;
            case 'tehnica_agricola':
                interestRate = 14;
                break;
            default:
                interestRate = 12;
        }

        const principal = carPrice - downPayment;
        const monthlyInterestRate = (interestRate / 100) / 12;
        const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
        setMonthlyPayment(monthlyPayment.toFixed(2));
        setInsurance((carPrice * 0.034).toFixed(2));
    }

    return (
        <div className={"leasing-calc"}>
            <div className={"calc-val"}>
                <div className={"calc-cmp-drop"}>
                    <label>
                        <select value={item} onChange={handleItemChange} className={"calc-cmp-drop"}>
                            <option value="auto">Autoturisme</option>
                            <option value="imobil">Imobil</option>
                            <option value="tehnica_agricola">Tehnica Agricola</option>
                        </select>
                    </label>
                </div>
                <div className={"calc-cmp"}>
                    <label>
                        <span className={"calc-left-text"}>Preț</span>
                        <input
                            type="number"
                            value={carPrice}
                            min="5000"
                            max="100000"
                            step={1000}
                            onChange={(e) => {
                                setCarPrice(e.target.value);
                                setDownPayment(Math.round(e.target.value * 0.2))
                                calculateMonthlyPayment()
                            }}
                            className={"calc-input calc-input-price"}
                        />
                        <span className={"calc-right-text"}>EUR</span>
                    </label>
                </div>
                <div className={"calc-cmp"}>
                    <input
                        type="range"
                        min="5000"
                        max="100000"
                        step="1000"
                        value={carPrice}
                        onChange={(e) => {
                            setCarPrice(e.target.value);
                            setDownPayment(Math.round(e.target.value * 0.2))
                            calculateMonthlyPayment()
                        }}
                        className={"calc-range"}
                    />
                </div>
                <div className={"calc-cmp calc-cmp-avans"}>
                    <label>
                        <span className={"calc-left-text"}>Avans</span>
                        <input
                            type="number"
                            value={downPayment}
                            min={carPrice * 0.2}
                            max={carPrice}
                            onChange={(e) => {
                                setDownPayment(Math.round(e.target.value))
                                calculateMonthlyPayment()
                            }}
                            className={"calc-input calc-input-avans"}
                        />
                        <span className={"calc-right-text"}>EUR</span>
                    </label>
                </div>
                <div className={"calc-cmp"}>
                    <input
                        type="range"
                        min={carPrice * 0.2}
                        max={carPrice}
                        step="1"
                        value={downPayment}
                        onChange={(e) => {
                            setDownPayment(Math.round(e.target.value));
                            calculateMonthlyPayment()
                        }}
                        className={"calc-range"}
                    />
                </div>
                <div className={"calc-cmp"}>
                    <label>
                        <span className={"calc-left-text"}>Termen</span>
                        <input
                            type="number"
                            value={loanTerm}
                            min="12"
                            max="60"
                            onChange={(e) => {
                                setLoanTerm(e.target.value)
                                calculateMonthlyPayment()
                            }}
                            className={"calc-input calc-input-termen"}
                        />
                        <span className={"calc-right-text"}>Luni</span>
                    </label>
                </div>
                <div className={"calc-cmp"}>
                    <input
                        type="range"
                        min="12"
                        max="60"
                        step="1"
                        value={loanTerm}
                        onChange={(e) => {
                            setLoanTerm(e.target.value)
                            calculateMonthlyPayment()
                        }}
                        className={"calc-range"}
                    />
                </div>
            </div>
            <div className={"month-pay"}>
                <div className={"month-pay-pr"}>Rata de leasing lunară de la:</div>
                <div className={"month-pay-pr"}>{monthlyPayment} EUR</div>
                <div className={"month-pay-in"}>+ Asigurare (CASCO):</div>
                <div className={"month-pay-in"}>{insurance} EUR</div>
                <p className={"month-pay-note"}>* Calculul realizat prin intermediul calculatorului online este unul
                    estimativ și nu reprezintă un angajament în vederea încheierii unei tranzacţii.</p>
            </div>
        </div>
    );
}
