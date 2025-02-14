import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const UseContextExample = () => {

    const [ theme, setTheme ] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

const Toolbar = () => {
    return (
        <ThemeButton />
    );
};

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => toggleTheme()}>{ theme === 'light' ? 'Dark' : 'Light' }</button>
    );
};

export default UseContextExample;