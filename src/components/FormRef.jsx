// FormRef.js
import React, { useRef, useState } from 'react';

function FormRef() {
    const nameRef = useRef();
    const emailRef = useRef();
    const [output, setOutput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setOutput(`Name: ${nameRef.current.value}, Email: ${emailRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} placeholder="Name" />
            <input ref={emailRef} placeholder="Email" />
            <button type="submit">Submit</button>
            <p>{output}</p>
        </form>
    );
}

export default FormRef;
