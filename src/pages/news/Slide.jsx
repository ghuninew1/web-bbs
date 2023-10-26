import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { useSwipeable } from "react-swipeable";
import "./Slider.css";
import PropTypes from "prop-types";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import { FiChevronRight, FiChevronLeft, FiXCircle } from "react-icons/fi";

export default function Slider({ auto }) {
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const direction = useRef("normal");
    const [secondSlideIndex, setSecondSlideIndex] = useState(0);
    const [firstSlideIndex, setFirstSlideIndex] = useState(slide?.to.length - 1);
    const [paused, setPaused] = useState(false);

    const currentSlides = [slide.to[firstSlideIndex], slide.to[secondSlideIndex]];

    const nextSlide = () => {
        direction.current = "normal";
        const nextSlideIndex = secondSlideIndex === slide?.to.length - 1 ? 0 : secondSlideIndex + 1;
        setFirstSlideIndex(secondSlideIndex);
        setSecondSlideIndex(nextSlideIndex);
    };

    const previousSlide = () => {
        direction.current = "reverse";
        const nextSlideIndex = secondSlideIndex === 0 ? slide?.to.length - 1 : secondSlideIndex - 1;
        setFirstSlideIndex(secondSlideIndex);
        setSecondSlideIndex(nextSlideIndex);
    };

    const swipeHanlers = useSwipeable({
        onSwipedLeft: () => nextSlide(),
        onSwipedRight: () => previousSlide(),
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                direction.current = "normal";
                nextSlide();
            }
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    });
    const handleClose = (e) => {
        e.preventDefault();
        if (e.target.classList.contains("close")) {
            changeSlide(null);
        }
    };

    return (
        <div className="slice-show close" onClick={handleClose}>
            <FiXCircle className="dismiss close" onClick={handleClose} />
            <span className="slice-show-left" onClick={previousSlide}>
                <FiChevronLeft />
            </span>
            <span className="slice-show-right" onClick={nextSlide}>
                <FiChevronRight />
            </span>
            <div className="slider" {...swipeHanlers}>
                {!!currentSlides.length &&
                    currentSlides.map((item) => (
                        <div
                            className={`slider_slide ${direction.current}`}
                            key={item.id}
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        >
                            <picture>
                                <source media="(min-width:800px)" srcSet={item.url} />
                                <img className="slider__img" src={item.src} alt={item.alt} />
                            </picture>
                        </div>
                    ))}
            </div>
            <div className="slice-show-main close" onClick={handleClose}>
                <div className="slice-show-dot-img">
                    {slide.to.map(
                        (item, idx) =>
                            slide.to.length > 5 &&
                            idx <= secondSlideIndex + 3 &&
                            idx >= secondSlideIndex - 3 && (
                                <img
                                    key={idx}
                                    src={item.src}
                                    alt={item.alt}
                                    className={idx === secondSlideIndex ? "active" : ""}
                                    onClick={() => setSecondSlideIndex(idx)}
                                />
                            )
                    )}
                </div>
                <div className="slice-show-main-text close" onClick={handleClose}>
                    <h3> {slide?.title}</h3>
                    <p>{slide?.content}</p>
                </div>
            </div>
        </div>
    );
}

Slider.propTypes = {
    auto: PropTypes.number,
};
