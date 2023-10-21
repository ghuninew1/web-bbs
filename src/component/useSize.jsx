import { useEffect, useState, useRef } from "react";

const useSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const refSize = useRef(null);

    useEffect(() => {
        const windowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        if (windowWidth > 400 && windowWidth < 768) {
            refSize.current = "sm";
        } else if (windowWidth > 768 && windowWidth < 992) {
            refSize.current = "md";
        } else if (windowWidth > 992 && windowWidth < 1200) {
            refSize.current = "lg";
        } else if (windowWidth > 1200 && windowWidth < 1600) {
            refSize.current = "xl";
        } else {
            refSize.current = "xs";
        }

        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize);
        };
    }, [windowWidth]);

    return refSize.current;
};

export default useSize;
