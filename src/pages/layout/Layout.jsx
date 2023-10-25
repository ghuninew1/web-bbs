import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import { UseScroll } from "../../store/DataContext";
// import { motion, useScroll, useSpring } from "framer-motion";

const Layout = ({ children, title, totop = false }) => {
    // const { scrollYProgress } = useScroll();
    const scollToRef = useRef(null);
    const [titles, setTitles] = useState("©Big Brain Studio");
    const { y, lastY } = UseScroll();

    useEffect(() => {
        if (title) {
            setTitles("©Big Brain Studio" + " - " + title);
        }
        document.title = titles;
        return () => {
            document.title = "©Big Brain Studio";
        };
    }, [title, titles]);

    useEffect(() => {
        if (totop) {
            const useScrollBar = () => {
                const scrollHeight = document.body.scrollHeight;
                const innerHeight = window.innerHeight;
                const scrollPercent = (scrollY / (scrollHeight - innerHeight)) * 100;
                console.log("scrollPercent", scrollPercent);
                // if (scrollPercent > 50) {

                // }
            };
            window.addEventListener("scroll", useScrollBar);
            return () => {
                window.removeEventListener("scroll", useScrollBar);
            };
        }
    }, [totop]);

    const showPercent = (value) => {
        return <process value={value} />;
    };

    const scrollToTop = () => {
        scollToRef.current =
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            }) || scollToRef.current;
    };

    return (
        <div className={"layout"}>
            {/* {totop && (
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
            )} */}
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
    title: PropTypes.string,
};

export default Layout;
