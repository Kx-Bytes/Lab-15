// FormState.js
import React, { useState } from 'react';

function FormState() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </form>
    );
}

export default FormState;
