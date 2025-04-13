import React, { useEffect, useState } from 'react';

function JokeFetcher() {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        const res = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' }
        });
        const data = await res.json();
        setJoke(data.joke);
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div>
            <p>{joke}</p>
            <button onClick={fetchJoke}>New Joke</button>
        </div>
    );
}

export default JokeFetcher;
