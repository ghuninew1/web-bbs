import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import scroll from "../../component/ScrollListener";

const Layout = ({ children, title, totop = false }) => {
    const scollToRef = useRef(null);
    const [titles, setTitles] = useState("©Big Brain Studio");
    const { lastY } = scroll();

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
                const scrollPercent = (lastY / (scrollHeight - innerHeight)) * 100;
                scollToRef.current = scrollPercent;
            };

            window.addEventListener("scroll", useScrollBar);
            return () => {
                window.removeEventListener("scroll", useScrollBar);
            };
        }
    }, [totop, lastY]);

    const showPercent = (value) => {
        return <progress value={value} max="100" className="progress-bar" />;
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
            {children}
            {totop && (
                <>
                    {showPercent(scollToRef.current)}

                    <button onClick={scrollToTop} className="totop">
                        to top
                    </button>
                </>
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
