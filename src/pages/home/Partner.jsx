import "./Partner.css";
import { Fade } from "react-awesome-reveal";

import { dataList } from "./dataList";

const Partner = () => {
    return (
        <div className="partner">
            <div className="partner-container">
                <div className="partner-logo">
                    {/* <Fade direction="right" cascade damping={0.2} delay={500} triggerOnce> */}
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
                    {/* </Fade> */}
                </div>

                <div className="partner-logo">
                    {/* <Fade direction="right" cascade damping={0.2}> */}
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
                    {/* </Fade> */}
                </div>
            </div>
        </div>
    );
};

export default Partner;
