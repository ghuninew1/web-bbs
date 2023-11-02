import { useRef, useContext, useEffect, useState } from "react";
import "./News.css";
import { dataNews } from "./dataNews";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import Layout from "../layout/Layout";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ModelNews from "./ModelNews";
import Anim from "../../component/Anim";
import ModelIframe from "./ModelIframe.jsx";

const News = () => {
    const dataRef = useRef(dataNews);
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const [show, setShow] = useState(false);
    const [showIframe, setShowIframe] = useState(false);

    useEffect(() => {
        dataRef.current = dataNews;
    }, []);

    const handleClick = (e, item) => {
        e.preventDefault();
        if (item?.to.toString().startsWith("http")) {
            changeSlide(item);
            setShowIframe(true);
        } else {
            changeSlide(item?.to.toString().startsWith("http") ? null : item);
            setShow(true);
        }
    };

    const closeModel = () => {
        setShow(false);
        setShowIframe(false);
        changeSlide(null);
    };

    return (
        <Layout title="News" totop={slide?.to.length > 0 ? false : true}>
            {show && <ModelNews show={show} onHide={closeModel} />}
            {showIframe && <ModelIframe show={showIframe} onHide={closeModel} />}

            <Container fluid="lg" className="g-0">
                <Anim type={"fadeIn"} delay={300} duration={800}>
                    {dataRef.current?.map((item) => (
                        <Row
                            key={item.id}
                            className={`text-center news-container
                        ${item.swap ? "flex-row-reverse" : ""}`}
                        >
                            <Col lg={5} md={12} className="news-frist-col">
                                <Image
                                    src={item.src}
                                    alt={item.id}
                                    rounded
                                    onClick={(e) => handleClick(e, item)}
                                />
                            </Col>
                            <Col lg={2} md={12} className="news-second-col">
                                <p>{item.date}</p>
                                <hr />
                            </Col>
                            <Col
                                lg={5}
                                md={12}
                                className={`news-third-col ${item.swap ? "warp" : ""}`}
                            >
                                <p>{item.title}</p>
                                {item.title2 && <p>{item.title2}</p>}

                                <p onClick={(e) => handleClick(e, item)}>read more</p>
                            </Col>
                        </Row>
                    ))}
                </Anim>
            </Container>
        </Layout>
    );
};

export default News;
