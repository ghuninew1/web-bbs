import { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { ImageSlideContext } from "../../store/DataContext";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";

const SliceShow = ({ auto }) => {
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const [cerrentIndex, setCerrentIndex] = useState(0);

    // console.log("slide", slide?.length);

    let interval = null;
    const autoSlide = useRef();
    autoSlide.current = () => {
        if (auto > 0) {
            interval = setInterval(() => {
                setCerrentIndex((prev) => {
                    return prev + 1 >= slide?.to.length ? 0 : prev + 1;
                });
            }, auto);
        }
    };
    useEffect(() => {
        autoSlide.current();
        return () => clearInterval(interval);
    }, [interval]);

    const handelRotationRight = () => {
        if (cerrentIndex === slide?.to.length - 1) {
            setCerrentIndex(0);
            return;
        }
        setCerrentIndex(cerrentIndex + 1);
    };

    const handelRotationLeft = () => {
        if (cerrentIndex === 0) {
            setCerrentIndex(slide?.to.length - 1);
            return;
        }
        setCerrentIndex(cerrentIndex - 1);
    };

    console.log("cerrentIndex", cerrentIndex, slide);

    return (
        <div className="slice-show">
            <FiXCircle className="dismiss" onClick={() => changeSlide(null)} />
            <span className="slice-show-left" onClick={handelRotationLeft}>
                <FiChevronLeft />
            </span>
            <span className="slice-show-right" onClick={handelRotationRight}>
                <FiChevronRight />
            </span>
            <div className={"slice-show-main"}>
                {slide &&
                    slide.to
                        ?.filter((dd, idx) => idx === cerrentIndex)
                        .map((item, idx) => (
                            <div key={idx} className="slice-show-main-img">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className={
                                        idx === cerrentIndex ? "anim-right-in" : "anim-left-in"
                                    }
                                />
                            </div>
                        ))}
                {slide && (
                    <div className="slice-show-dot-img">
                        {slide?.to.map((item, idx) => (
                            <span key={idx}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    onClick={() => setCerrentIndex(idx)}
                                    style={{
                                        transform: idx === cerrentIndex ? "scale(1.2)" : "scale(1)",
                                        filter:
                                            idx !== cerrentIndex
                                                ? "brightness(0.2)"
                                                : "brightness(1)",
                                    }}
                                />
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="slice-show-main-text">
                <h3> {slide?.title}</h3>
                <p className="text-justify">{slide?.content}</p>
            </div>
        </div>
    );
};

SliceShow.propTypes = {
    auto: PropTypes.number,
};

export default SliceShow;
