import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function useFormLogin() {
    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const { authLogin } = useContext(AuthContext);

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

        authLogin(value)
    }

    return { value, changeValue, onSubmit };
}