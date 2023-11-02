import { ServiceData } from "./ServiceData";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import "./ServiceDatas.css";
import Anim from "../../component/Anim";

const ServiceDatas = () => {
    const ServiceValue = () => {
        return (
            <Container fluid="lg" className="g-0 d-flex justify-content-center align-items-center">
                <Row className="service-content">
                    <Col>
                        <Anim type={"fadeInUp"} cascade>
                            {ServiceData &&
                                ServiceData.map((item, idx) => (
                                    <span
                                        key={item.id + idx}
                                        className={`service-item-${item.id} service-img`}
                                    >
                                        <Image key={item.id + idx} src={item.src} />
                                    </span>
                                ))}
                        </Anim>
                    </Col>
                </Row>
            </Container>
        );
    };
    return <ServiceValue />;
};

export default ServiceDatas;
