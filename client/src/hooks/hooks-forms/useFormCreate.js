import { useContext, useState } from "react";
import { MemeContext } from "../../context/MemeContext";
import { AuthContext } from "../../context/AuthContext";

export default function useFormCreate() {
    
    const { createMeme } = useContext(MemeContext);
    const {user} = useContext(AuthContext);

    const [value, setValue] = useState({
        title: '',
        description: '',
        imageUrl: '',
        _ownerId: user._id
    });


    function changeValue(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();

        if (Object.values(value).some(x => x === '')) {
            return alert('Please write empty fileds');
        }

        createMeme(value)
    }

    return { value, changeValue, onSubmit };
}