import { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const SliceShow = ({ auto }) => {
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const [cerrentIndex, setCerrentIndex] = useState(0);
    const [state, setState] = useState(false);

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
        setCerrentIndex(cerrentIndex === slide?.to.length - 1 ? 0 : cerrentIndex + 1);
        setState(true);
    };

    const handelRotationLeft = () => {
        setCerrentIndex(cerrentIndex === 0 ? slide?.to.length - 1 : cerrentIndex - 1);
        setState(false);
    };

    const handleClose = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("close")) {
            changeSlide(null);
        }
    };

    return (
        <div className="slice-show close" onClick={handleClose}>
            <FiXCircle className="dismiss close" onClick={handleClose} />
            <span className="slice-show-left" onClick={handelRotationLeft}>
                <FiChevronLeft />
            </span>
            <span className="slice-show-right" onClick={handelRotationRight}>
                <FiChevronRight />
            </span>
            <Zoom top={state} bottom={!state}>
                <div className={"slice-show-main close"} onClick={handleClose}>
                    <Slide left={!state} right={state} cascade>
                        <span className="slice-show-img">
                            {slide?.to.map(
                                (item, idx) =>
                                    idx === cerrentIndex && (
                                        <img
                                            key={idx}
                                            src={item.src}
                                            alt={item.alt}
                                            className="slice-show-img-item"
                                        />
                                    )
                            )}
                        </span>
                    </Slide>

                    {slide && (
                        <div className="slice-show-dot-img">
                            {slide?.to.map((item, idx) => (
                                <img
                                    key={idx}
                                    src={item.src}
                                    alt={item.alt}
                                    className={
                                        idx === cerrentIndex
                                            ? "slice-show-dot-img-item active"
                                            : "slice-show-dot-img-item"
                                    }
                                    onClick={() => setCerrentIndex(idx)}
                                />
                            ))}
                        </div>
                    )}
                    <div className="slice-show-main-text close" onClick={handleClose}>
                        <h3> {slide?.title}</h3>
                        <p className="text-justify">{slide?.content}</p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

SliceShow.propTypes = {
    auto: PropTypes.number,
};

export default SliceShow;
