// import { useState, useEffect, useRef } from "react";
import Layout from "../layout/Layout";
// import "./Service.css";
import ServiceDatas from "./ServiceDatas";
import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";
import Anim from "../../component/Anim";

import "./service.css";

const Service = () => {
    return (
        <Layout title="Service">
            <Container fluid="lg" className="g-0 service-main">
                <Anim type={"zoomInUp"} duration={600}>
                    <ServiceDatas />
                </Anim>
            </Container>
        </Layout>
    );
};

export default Service;
