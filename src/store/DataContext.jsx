import {
    createContext,
    useState,
    useMemo,
    useContext,
    useEffect,
    useCallback,
    useRef,
} from "react";
import PropTypes from "prop-types";

export const ScrollContext = createContext(null);
export const UseScroll = () => useContext(ScrollContext);

export const DataProvider = ({ children }) => {
    const scollRef = useRef(null);
    // const scrollTo = (ref) => {
    //     if (ref && ref.current /* + other conditions */) {
    //         ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    //     }
    // };

    // const handleScroll = useCallback(() => {
    //     if (scollRef.current) {
    //         scrollTo(scollRef);
    //     } else {
    //         console.log("No scollRef");
    //     }
    // }, []);

    console.log("DataProvider", scollRef.current);

    return <ScrollContext.Provider value={scollRef}>{children}</ScrollContext.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
