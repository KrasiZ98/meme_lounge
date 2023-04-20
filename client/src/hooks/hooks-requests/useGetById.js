import { useEffect, useState } from "react";

export default function useGetbyId(memeId, defaultValue) {
    const [meme, setMeme] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/meme/' + memeId)
        .then((response) => response.json())
        .then((result) => setMeme(result))
    }, [memeId]);

    return [meme, setMeme];
}