export async function create(memeData) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/meme', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(memeData)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;


    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function update(memeId, memeData) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/meme/' + memeId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(memeData)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;


    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}

export async function remove(memeId) {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/meme/' + memeId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const result = await response.json();
        return result;


    } catch (error) {
        alert(error.message);
        throw error.message;
    }
}