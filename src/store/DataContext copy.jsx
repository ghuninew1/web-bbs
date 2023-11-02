import { createContext, useState, useMemo, useContext, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export const ScrollContext = createContext({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
});

export const UseScroll = () => useContext(ScrollContext);

export const DataProvider = ({ children }) => {
    const [scroll, setScroll] = useState({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0,
    });

    const scrollTo = () => {
        if (scollRef && scollRef.current /* + other conditions */) {
            scollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    const handleScroll = useCallback(() => {
        setScroll((prev) => ({
            x: window.scrollX,
            y: window.scrollY,
            lastX: prev.x,
            lastY: prev.y,
        }));
    }, []);

    const dataScroll = useMemo(() => {
        return {
            x: scroll.x,
            y: scroll.y,
            lastX: scroll.lastX,
            lastY: scroll.lastY,
        };
    }, [scroll]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return <ScrollContext.Provider value={dataScroll}>{children}</ScrollContext.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
