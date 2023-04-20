export async function login(email, password) {
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
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

export async function register(email, password, username, gender) {
    try {
        const response = await fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, username, gender })
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