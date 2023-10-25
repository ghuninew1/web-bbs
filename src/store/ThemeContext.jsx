import { createContext, useState, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext("light");

export const UseTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Something went wrong!");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    const themeValue = {
        theme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
