import React, { useRef } from 'react';

function FocusForm() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} placeholder="Click button to focus" />
            <button onClick={handleClick}>Focus</button>
        </div>
    );
}

export default FocusForm;
