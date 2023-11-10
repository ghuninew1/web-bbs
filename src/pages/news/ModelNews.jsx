import { useState, useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { FiXCircle } from "react-icons/fi";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import Image from "react-bootstrap/Image";
import "./ModelNews.css";

function ModelNews(props) {
    const [slide] = useContext(ImageSlideContext);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    // const [prev, setPrev] = useState("slideRight");

    // let interval = null;
    // const autoSlide = useRef();

    // autoSlide.current = () => {
    //     if (!paused && props.show) {
    //         interval = setInterval(() => {
    //             setIndex((prev) => {
    //                 return prev + 1 >= slide?.to.length ? 0 : prev + 1;
    //             });
    //         }, 5000);

    //         return () => clearInterval(interval);
    //     }
    // };
    // useEffect(() => {
    //     if (props.show) {
    //         paused ? clearInterval(interval) : autoSlide.current();
    //     }
    //     return () => clearInterval(interval);
    // }, [interval, paused, props.show]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen
        >
            <Modal.Body>
                <Container>
                    <Row>
                        <Col lg={12} className="model-col mt-1">
                            <FiXCircle
                                className="model-close"
                                onClick={props.onHide}
                            />
                            <Carousel
                                activeIndex={index}
                                onSelect={handleSelect}
                                pause={paused}
                                interval={null}
                                slide={true}
                                controls={slide?.to.length > 1 ? true : false}
                            >
                                {slide?.to &&
                                    slide?.to.map((item, idx) => (
                                        <Carousel.Item
                                            key={idx}
                                            className="model-img"
                                        >
                                            <Image
                                                src={item?.src}
                                                fluid
                                                key={idx}
                                                onMouseEnter={() =>
                                                    setPaused(true)
                                                }
                                                onMouseLeave={() =>
                                                    setPaused(false)
                                                }
                                            />
                                        </Carousel.Item>
                                    ))}
                            </Carousel>

                            {/* <FiXCircle
                                className="model-close"
                                onClick={props.onHide}
                            />
                            {slide?.to &&
                                slide?.to.map(
                                    (item, idx) =>
                                        idx === index && (
                                            <div
                                                key={idx}
                                                className={`model-img d-block w-100 ${prev}`}
                                            >
                                                <Image
                                                    src={item?.src}
                                                    fluid
                                                    key={idx}
                                                    onMouseEnter={() =>
                                                        setPaused(true)
                                                    }
                                                    onMouseLeave={() =>
                                                        setPaused(false)
                                                    }
                                                />
                                                <FiChevronLeft
                                                    className="model-left"
                                                    onClick={handelRotationLeft}
                                                />
                                                <FiChevronRight
                                                    className="model-right"
                                                    onClick={
                                                        handelRotationRight
                                                    }
                                                />
                                            </div>
                                        )
                                )}
                            <div className="carousel__dots">
                                {slide?.to &&
                                    slide?.to.map((item, idx) => (
                                        <span
                                            className={`carousel__dot${
                                                idx === index
                                                    ? " is-selected"
                                                    : ""
                                            }`}
                                            onClick={() => setIndex(idx)}
                                            key={idx}
                                        ></span>
                                    ))}
                            </div> */}
                        </Col>
                        <Col md={12} className="model-title mb-3 mt-5">
                            {slide?.title && <p>{slide?.title}</p>}
                            {slide?.title2 && <p>{slide?.title2}</p>}
                        </Col>
                        <Col md={12} className="model-content ">
                            {slide?.content && <p>{slide?.content}</p>}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer onClick={props.onHide}></Modal.Footer>
        </Modal>
    );
}

ModelNews.propTypes = {
    onHide: PropTypes.func,
    show: PropTypes.bool,
};

export default ModelNews;
