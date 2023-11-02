import { createContext, useState, useCallback, useRef, useEffect } from "react";
import PropTypes from "prop-types";

export const ImageSlideContext = createContext(null);
export const scollToRef = createContext(null);

const UseImageSlide = ({ children }) => {
    const [slide, setSlide] = useState(null);
    const scollRef = useRef(null);

    const changeSlide = useCallback((data) => {
        setSlide(() => (data ? data : null));
    }, []);

    return (
        <ImageSlideContext.Provider value={[slide, changeSlide]}>
            {children}
        </ImageSlideContext.Provider>
    );
};

UseImageSlide.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UseImageSlide;
