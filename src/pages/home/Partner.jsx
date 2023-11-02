import "./Partner.css";
import dataList from "./dataList.json";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Anim from "../../component/Anim";

const Partner = () => {
    return (
        <Container fluid className="partner g-0 py-2 ">
            <p className="text-center text-black">Thank You Our Clients & Partners</p>
            <Row className="partner-containe px-1 ">
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
                        {dataList
                            .filter((id) => id.id > 7 && id.id <= 14)
                            .map((data, idx) => (
                                <span
                                    key={data.id + idx}
                                    className={`partner-logo-${data.id} mx-2`}
                                >
                                    <Image src={data.url} fluid alt={data.alt} />
                                </span>
                            ))}
                    </Col>
                </Anim>
                <Col lg={12} className="partner-logo-3-4 ">
                    <div className="partner-logo-3-4-1">
                        <span className="partner-logo3 ">
                            {dataList
                                .filter((id) => (id.id > 14) & (id.id <= 19))
                                .map((data, idx) => (
                                    <span
                                        key={data.id + idx}
                                        className={`partner-logo-${data.id} mx-2`}
                                    >
                                        <Image src={data.url} fluid alt={data.alt} />
                                    </span>
                                ))}
                        </span>
                        <span className="partner-logo4 ">
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
