import { useContext, useState } from "react";
import { MemeContext } from "../../context/MemeContext";
import { AuthContext } from "../../context/AuthContext";

export default function useFormEdit(memeId) {
    
    const { memes, updateMeme } = useContext(MemeContext);

    const {user} = useContext(AuthContext);

    const meme = memes.find(x => x._id === memeId);

    const [value, setValue] = useState({
        title: meme.title,
        description: meme.description,
        imageUrl: meme.imageUrl,
        _id: meme._id,
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

        updateMeme(meme._id, value)
    }

    return { value, changeValue, onSubmit };
}