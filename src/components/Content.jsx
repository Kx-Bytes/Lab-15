import React, { useState } from 'react';

function Content() {
    const [joke, setJoke] = useState('');

    const getJoke = () => {
        const jokes = [
            "What is a programmer's favourite food?....Bugs",
            "What is a math teachers favourite meal? A Pie",
            "She sells, sea shells on the sea shore."
        ];
        setJoke(jokes[Math.floor(Math.random() * jokes.length)]);
    };

    return (
        <div>
            <button onClick={getJoke}>Get a Joke</button>
            <p>{joke}</p>
        </div>
    );
}

export default Content;