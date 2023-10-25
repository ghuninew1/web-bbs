import "./Partner.css";
import Zoom from "react-reveal/Zoom";
import { dataList } from "./dataList";

const Partner = () => {
    return (
        <div className="partner">
            <div className="partner-container">
                <Zoom right cascade>
                    <div className="partner-logo">
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
                    </div>
                    <div className="partner-logo">
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
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Partner;
