import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import useGetAll from "../hooks/hooks-requests/useGetAll";
import * as memeServices from "../services/memeServices";

export const MemeContext = createContext();

const MemeContextProvider = (props) => {

    const [memes, setMemes] = useGetAll([]);

    const navigate = useNavigate();

    async function createMeme(memeData) {
       
        const result = await memeServices.create(memeData);
        setMemes(oldMemes => [...oldMemes, result]);
        navigate('/catalog');
    }

    async function updateMeme(memeId, memeData) {
        const result = await memeServices.update(memeId, memeData);
        setMemes(memes.map(x => x._id === memeId ? result : x));
        navigate(`/details/${memeId}`);
    }

    async function deleteMeme(memeId) {
        await memeServices.remove(memeId);
        setMemes(memes.filter(x => x._id !== memeId));
        navigate('/catalog')
    }


    return (
        <MemeContext.Provider value={{ memes, createMeme, updateMeme, deleteMeme }}>
            {props.children}
        </MemeContext.Provider>
    )
}

export default MemeContextProvider;