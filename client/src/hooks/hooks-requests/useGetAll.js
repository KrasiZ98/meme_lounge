import { useEffect, useState } from "react";

export default function useGetAll(defaultValue) {
    const [memes, setMemes] = useState(defaultValue);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/meme')
            .then((response) => response.json())
            .then((result) => setMemes(Object.values(result)))
    }, []);

    return [memes, setMemes];
}