import {useEffect, useState} from "react";
import {getRates} from "../api/rate";

export function useInterestRates() {
    const [interestRates, setInterestRates] = useState({
        carRate: 0,
        apartmentRate: 0,
        farmRate: 0
    });

    useEffect(() => {
        const fetchRates = async () => {
            const result = await getRates();
            const transformedResult = result.data.reduce((acc, value) => {
                acc[value._id] = value.rate;
                return acc;
            }, {});
            setInterestRates(transformedResult);
        }

        fetchRates();
    }, [])

    return {interestRates}
}