import "./Partner.css";

import dataList from "./dataList.json";
import Container from "react-bootstrap/Container";
import { Image, Col, Row } from "react-bootstrap";
import Anim from "../../component/Anim";

const Partner = () => {
    return (
        <Container fluid className="partner g-0 ">
            <p className="text-center mt-4 h5 text-black">Thank You Our Clients & Partners</p>
            <Row className="partner-containe px-2 ">
                <Anim type={"fadeInUp"} duration={1000} delay={1200}>
                    <Col lg={12} className="partner-logo1">
                        {dataList
                            .filter((id) => id.id <= 7)
                            .map((data, idx) => (
                                <span
                                    key={data.id + idx}
                                    className={`partner-logo-${data.id} mx-1`}
                                >
                                    <Image src={data.url} fluid alt={data.alt} />
                                </span>
                            ))}
                    </Col>
                </Anim>
                <Anim type={"fadeInUp"} duration={1000} delay={1300}>
                    <Col lg={12} className="partner-logo2">
                        {/* <Anim type={"fadeIn"} duration={1000} cascade cascadeDelay={100}> */}
                        {dataList
                            .filter((id) => id.id > 7 && id.id <= 14)
                            .map((data, idx) => (
                                <span
                                    key={data.id + idx}
                                    className={`partner-logo-${data.id} mx-1`}
                                >
                                    <Image src={data.url} fluid alt={data.alt} />
                                </span>
                            ))}
                        {/* </Anim> */}
                    </Col>
                </Anim>
                <Col lg={12} className="partner-logo-3-4 ">
                    <div className="partner-logo-3-4-1">
                        <span className="partner-logo3 ">
                            {/* <Anim type={"fadeIn"} duration={1000} cascade cascadeDelay={300}> */}
                            {dataList
                                .filter((id) => (id.id > 14) & (id.id <= 19))
                                .map((data, idx) => (
                                    <span
                                        key={data.id + idx}
                                        className={`partner-logo-${data.id} mx-1`}
                                    >
                                        <Image src={data.url} fluid alt={data.alt} />
                                    </span>
                                ))}
                            {/* </Anim> */}
                        </span>
                        <span className="partner-logo4 ">
                            {/* <Anim type={"fadeIn"} duration={1000} cascade cascadeDelay={200}> */}
                            {dataList
                                .filter((id) => (id.id > 19) & (id.id <= 24))
                                .map((data, idx) => (
                                    <span
                                        key={data.id + idx}
                                        className={`partner-logo-${data.id} mx-2`}
                                    >
                                        <Image src={data.url} fluid alt={data.alt} />
                                    </span>
                                ))}
                            {/* </Anim> */}
                        </span>
                    </div>
                    <span className=" partner-logo-25 mx-2">
                        <Image src={dataList[24]?.url} fluid alt={dataList[24]?.alt} />
                    </span>
                </Col>
            </Row>
        </Container>
    );
};

export default Partner;
