import { useEffect, useState, useRef } from "react";
import useSize from "../../component/useSize";
import PropTypes from "prop-types";

const LayoutSize = ({ children }) => {
    const windowSize = useSize();
    const [classLayout, setClassLayout] = useState("layout");
    const refLayout = useRef(null);

    useEffect(() => {
        if (windowSize === "xs") {
            setClassLayout("layout layout-xs");
        } else if (windowSize === "sm") {
            setClassLayout("layout layout-sm");
        } else if (windowSize === "md") {
            setClassLayout("layout layout-md");
        } else if (windowSize === "lg") {
            setClassLayout("layout layout-lg");
        } else if (windowSize === "xl") {
            setClassLayout("layout layout-xl");
        } else {
            setClassLayout("layout");
        }
    }, [windowSize]);

    useEffect(() => {
        refLayout.current.style.transition = "all 0.3s ease";
    }, []);

    return (
        <div ref={refLayout} className={classLayout}>
            {children}
        </div>
    );
};

LayoutSize.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutSize;
