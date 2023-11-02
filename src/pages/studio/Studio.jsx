import { useState, useEffect } from "react";
import Layout from "./../layout/Layout.jsx";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Studio.css";
import Anim from "../../component/Anim.jsx";

const Studio = () => {
    const [titles, setTitles] = useState(false);
    const [titlesMain, setTitlesMain] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setTitles(true);
        }, 3000);
        const timer2 = setTimeout(() => {
            setTitlesMain(true);
        }, 2500);
        return () => clearTimeout(timer1, timer2);
    }, []);

    return (
        <Layout title="Studio">
            <Container fluid="lg" className="studio g-0 d-flex justify-content-center">
                {!titles && (
                    <Anim
                        type={titlesMain ? "fadeOutDown" : "zoomInUp"}
                        duration={600}
                        className={"studio-head"}
                    >
                        <h1 className="studio-active">
                            <span style={{ fontSize: "35px", paddingRight: "10px" }}>WE </span>{" "}
                            CHANGED <span style={{ fontSize: "35px", padding: "10px" }}>THE </span>
                            NAME!!
                        </h1>
                    </Anim>
                )}
                {titles && (
                    <Container>
                        <Row>
                            <Col className="mx-3">
                                <Anim
                                    type={!titles ? "fadeOutDown" : "fadeInUp"}
                                    duration={700}
                                    cascade={true}
                                >
                                    <h2>Our Story :</h2>
                                    <p className="studio-text">
                                        Big Brain Studio was formerly known as{" "}
                                        <span>Big Brain Pictures. </span>
                                        The company was founded in 2013 by{" "}
                                        <span>Auchara Kijkanjanas</span>, one of the pioneers in the
                                        Computer Graphic Industry in Thailand. For 20 years of
                                        experience, her expertise and works were guaranteed by both
                                        International and Domestic awards for Animation Feature Film
                                        and VFX work.
                                    </p>
                                    <p className="studio-text mb-3">
                                        At <span>Big Brain Studio</span>, We selectively assemble a
                                        team of creative, innovative and professional staff enabling
                                        us to initiate content design to meet quality demand and
                                        industry directions.
                                    </p>
                                    <h2>Our Team :</h2>
                                    <p className="studio-text">
                                        We share the same mission to deliver the utmost creative
                                        content and produce animation films with innovative
                                        techniques through sustainable business practice while
                                        pacing global trends.
                                    </p>
                                </Anim>
                            </Col>
                            <Col md="4" className="studio-img">
                                <Anim
                                    type={!titles ? "fadeOutDown" : "slideInRight"}
                                    duration={800}
                                    delay={400}
                                >
                                    <Image src={"/img/sutudio/ptum.webp"} fluid />
                                </Anim>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Container>
        </Layout>
    );
};

export default Studio;
