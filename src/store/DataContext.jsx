import { createContext, useState, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const ThemeContext = createContext("light");

export const ImageSlideContext = createContext(null);

export const UseTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Something went wrong!");
    }
    return context;
};

export const DataProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [slide, setSlide] = useState(null);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }, []);

    const changeSlide = useCallback((data) => {
        setSlide(() => (data ? data : null));
    }, []);

    const themeValue = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeValue}>
            <ImageSlideContext.Provider value={[slide, changeSlide]}>
                {children}
            </ImageSlideContext.Provider>
        </ThemeContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
