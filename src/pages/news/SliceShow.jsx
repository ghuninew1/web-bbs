import { useEffect, useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import "./SliceShow.css";

const SliceShow = ({ auto }) => {
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const [cerrentIndex, setCerrentIndex] = useState(0);
    const [state, setState] = useState(false);
    const [paused, setPaused] = useState(false);
    const [time, setTime] = useState(0);

    let interval = null;
    const autoSlide = useRef();

    autoSlide.current = () => {
        if (auto > 0 && !paused) {
            interval = setInterval(
                () => {
                    setCerrentIndex((prev) => {
                        return prev + 1 >= slide?.to.length ? 0 : prev + 1;
                    });
                    setState(false);
                    setTime(0);
                },
                auto ? auto : 5000
            );
        }
    };
    useEffect(() => {
        paused ? clearInterval(interval) : autoSlide.current();
        return () => clearInterval(interval);
    }, [interval, paused]);

    useEffect(() => {
        if (auto > 0 && !paused) {
            const timeSet = setInterval(() => {
                setTime((prev) => {
                    return prev + 1000;
                });
            }, 1000);
            return () => clearInterval(timeSet);
        } else {
            setTime(0);
        }
    }, [auto, paused]);

    console.log("timeRef", time);

    const showPercent = () => {
        return <progress value={time} max={auto ? auto : 5000} className="progress-bar" />;
    };

    const handelRotationRight = () => {
        setCerrentIndex(cerrentIndex === slide?.to.length - 1 ? 0 : cerrentIndex + 1);
        setState(false);
    };

    const handelRotationLeft = () => {
        setCerrentIndex(cerrentIndex === 0 ? slide?.to.length - 1 : cerrentIndex - 1);
        setState(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("close")) {
            changeSlide(null);
        }
    };

    return (
        <div className="slice-show close" onClick={handleClose}>
            {showPercent()}
            <FiXCircle className="dismiss close" onClick={handleClose} />
            <span className="slice-show-left" onClick={handelRotationLeft}>
                <FiChevronLeft />
            </span>
            <span className="slice-show-right" onClick={handelRotationRight}>
                <FiChevronRight />
            </span>
            <div className={"slice-show-main close"} onClick={handleClose}>
                <div className="slider">
                    {slide.to &&
                        slide.to.map(
                            (item, idx) =>
                                cerrentIndex === idx && (
                                    <Fade direction={state ? "left" : "right"} key={idx}>
                                        <picture
                                            key={idx}
                                            onMouseEnter={() => setPaused(true)}
                                            onMouseLeave={() => setPaused(false)}
                                        >
                                            <source media="(min-width:900px)" srcSet={item.src} />
                                            <img
                                                className="slider__img"
                                                src={item.src}
                                                alt={item.alt}
                                            />
                                        </picture>
                                    </Fade>
                                )
                        )}
                </div>
            </div>

            {slide && (
                <div className="slice-show-dot-img">
                    {slide.to.map(
                        (item, idx) =>
                            slide.to?.length > 5 &&
                            idx <= cerrentIndex + 5 &&
                            idx >= cerrentIndex - 5 && (
                                <span key={idx} className="slice-show-dot-img-item">
                                    <img
                                        key={idx}
                                        src={item.src}
                                        alt={item.alt}
                                        className={idx === cerrentIndex ? "active" : ""}
                                        onClick={() => setCerrentIndex(idx)}
                                    />
                                </span>
                            )
                    )}
                </div>
            )}
            <div className="slice-show-main-text close" onClick={handleClose}>
                <Fade direction="up" cascade delay={500}>
                    <h3> {slide?.title}</h3>
                    <p className="text-justify">{slide?.content}</p>
                </Fade>
            </div>
        </div>
    );
};

SliceShow.propTypes = {
    auto: PropTypes.number,
};

export default SliceShow;
