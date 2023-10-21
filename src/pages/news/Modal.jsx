import PropTypes from "prop-types";
import "./Modal.css";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const Modal = ({
    clickedImg,
    setClickedImg,
    handelRotationRight,
    handelRotationLeft,
    currentIndex,
    setCurrentIndex,
    data,
}) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    useEffect(() => {
        if (seconds === 5) {
            handelRotationRight();
            setSeconds(0);
        }
    }, [seconds, handelRotationRight]);

    const handleClose = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
            setCurrentIndex(null);
            setIsActive(false);
        }
    };

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.src);
        setIsActive(true);
    };

    return (
        <div>
            <div className="overlay dismiss" onClick={handleClose}>
                <span className="slide-modal-wrapper dismiss ">
                    <FiXCircle className="dismiss" onClick={handleClose} />

                    <div className="modalmain">
                        <img
                            src={clickedImg && clickedImg}
                            alt="bigger pic"
                            onMouseEnter={() => {
                                setIsActive(false);
                            }}
                            onMouseLeave={() => {
                                setIsActive(true);
                            }}
                        />
                        <progress className="slider__progress" value={seconds} max="5"></progress>
                    </div>

                    <div className="slider__itemtmp">
                        {data.length > 1 &&
                            data.map((item, index) => (
                                <div
                                    key={index}
                                    className={index === currentIndex ? "active" : ""}
                                    onClick={handleClose}
                                >
                                    <img
                                        src={item.src}
                                        alt="bigger pic"
                                        className={index === currentIndex ? "active" : ""}
                                        onClick={() => handleClick(item, index)}
                                    />
                                </div>
                            ))}
                    </div>
                    <p className="slider__itemtmp__text">
                        {data[currentIndex] && data[currentIndex].title}
                    </p>
                </span>
                <div
                    onClick={handelRotationLeft && handelRotationLeft}
                    className="overlay-arrows_left"
                >
                    <FiChevronLeft />
                </div>
                <div
                    onClick={handelRotationRight && handelRotationRight}
                    className="overlay-arrows_right"
                >
                    <FiChevronRight />
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    clickedImg: PropTypes.string,
    setClickedImg: PropTypes.func,
    handelRotationRight: PropTypes.func,
    handelRotationLeft: PropTypes.func,
    currentIndex: PropTypes.number,
    setCurrentIndex: PropTypes.func,
    data: PropTypes.array,
};
export default Modal;
