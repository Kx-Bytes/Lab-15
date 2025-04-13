import React, { useState, useReducer } from 'react';

export function CounterUseState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>useState Counter: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment': return state + 1;
        case 'decrement': return state - 1;
        default: return state;
    }
}

export function CounterUseReducer() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h3>useReducer Counter: {count}</h3>
            <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrease</button>
        </div>
    );
}
