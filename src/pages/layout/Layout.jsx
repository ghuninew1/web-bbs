// import { useState } from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import { motion, useScroll, useSpring } from "framer-motion";

const Layout = ({ children, totop = false }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={"layout"}>
            {totop && (
                <motion.div
                    style={{
                        scaleX,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "red",
                        transformOrigin: "0%",
                        zIndex: 9998,
                    }}
                />
            )}
            {children}
            {totop && (
                <button onClick={scrollToTop} className="totop">
                    to top
                </button>
            )}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    totop: PropTypes.bool,
};

export default Layout;
