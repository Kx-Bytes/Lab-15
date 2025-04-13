// ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeContext';

function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <div className={theme}>
            <p>Current Theme: {theme}</p>
            <button onClick={toggle}>Toggle Theme</button>
        </div>
    );
}

export default ThemeToggle;
