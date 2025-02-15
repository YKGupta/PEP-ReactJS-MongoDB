import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './themeSlice';

const ThemeToggle = () => {

    const theme = useSelector((state) => state.theme.mode);
    const dispatcher = useDispatch();

    return (
        <button onClick={() => dispatcher(toggleTheme())}>Switch to {theme === 'light' ? 'Dark' : 'Light'} mode</button>
    )
}

export default ThemeToggle;