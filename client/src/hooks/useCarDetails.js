import {useState} from "react";

export function useCarDetails(){
    const [carDetails, setCarDetails] = useState({
        model: '',
        description: '',
        transmission: '',
        fuel: '',
        price: 0,
        year: 0,
        color: '',
        img: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCarDetails({...carDetails, [name]: value});
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            setCarDetails({...carDetails, img: base64String});
        };

        reader.readAsDataURL(file);
    };

    return {carDetails, setCarDetails, handleInputChange, handleImageChange}
}