import {useState} from "react";

export function useApartmentDetails(){
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

    return {apartmentDetails, setApartmentDetails, handleInputChange, handleImageChange}
}