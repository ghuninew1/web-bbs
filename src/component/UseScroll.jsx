import { useEffect, useState } from "react";
import ScrollListener from "./ScrollListener";
import PropTypes from "prop-types";

const UseScroll = ({ children }) => {
    const scroll = ScrollListener();
    const [style, setStyle] = useState({});
    const [className, setClassName] = useState("logohid");

    useEffect(() => {
        if (scroll.lastY === scroll.y) {
            return;
        }
        if (scroll.y - scroll.lastY > 0) {
            if (scroll.y > 50) {
                setStyle({
                    tranform: "translateY(100%)",
                    transition: "all",
                });
                setClassName("logohi");
            } else {
                // setStyle({
                //     height: "573px",
                //     tranform: "translateY(0)",
                //     transition: "all",
                //     opacity: "1",
                // });
                setClassName("logohid");
            }
        }
    }, [scroll]);

    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
};

UseScroll.propTypes = {
    children: PropTypes.node.isRequired,
};
export default UseScroll;
