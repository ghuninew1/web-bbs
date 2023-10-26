import "./Partner.css";
import { Fade } from "react-awesome-reveal";

import { dataList } from "./dataList";
import { useState, useEffect } from "react";

const Partner = () => {
    const windowWidth = window.innerWidth;
    const [style, setStyle] = useState({});
    const [style2, setStyle2] = useState({});

    useEffect(() => {
        if (windowWidth <= 960) {
            const windwosChange = () => {
                if (windowWidth <= 960) {
                    setStyle2({
                        width: "100%",
                        textAlign: "center",
                    });
                } else {
                    setStyle2({});
                }

                if (windowWidth <= 600) {
                    setStyle({
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "auto",
                        width: "100%",
                    });
                } else {
                    setStyle({
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        maxWidth: "100%",
                        width: "100%",
                    });
                }
            };
            window.addEventListener("resize", windwosChange);
            return () => {
                window.removeEventListener("resize", windwosChange);
            };
        }
    }, [windowWidth]);

    return (
        <div className="partner">
            <div className="partner-container">
                <div className="partner-logo1">
                    <Fade direction="right" cascade damping={0.2} delay={500} triggerOnce>
                        {dataList
                            .filter((id) => id.id <= 12)
                            .map((data, idx) => (
                                <span key={data.id + idx} className={`partner-logo-${data.id}`}>
                                    <img
                                        key={data.id + idx}
                                        src={data.url}
                                        alt={data.alt}
                                        width={data.width}
                                        height={data.height}
                                    />
                                </span>
                            ))}
                    </Fade>
                </div>

                <div className="partner-logo2">
                    <Fade direction="right" cascade damping={0.2} triggerOnce>
                        {dataList
                            .filter((id) => (id.id > 12) & (id.id <= 25))
                            .map((data, idx) => (
                                <span key={data.id + idx} className={`partner-logo-${data.id}`}>
                                    <img
                                        key={data.id + idx}
                                        src={data.url}
                                        alt={data.alt}
                                        width={data.width}
                                        height={data.height}
                                    />
                                </span>
                            ))}
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Partner;
