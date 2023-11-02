import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";
import { FiXCircle } from "react-icons/fi";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import Ratio from "react-bootstrap/Ratio";
import "./ModelNews.css";

function ModelIframe(props) {
    const [slide] = useContext(ImageSlideContext);

    return (
        <Modal {...props} fullscreen backdrop centered>
            <Modal.Body onClick={props.onHide}>
                <Container>
                    <Row>
                        <Col lg={12} className="model-col mt-1">
                            <FiXCircle className="model-close" onClick={props.onHide} />
                            <Ratio aspectRatio="16x9">
                                {slide?.to && (
                                    <iframe
                                        src={slide?.to}
                                        title={slide?.title}
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-presentation"
                                    />
                                )}
                            </Ratio>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer onClick={props.onHide}></Modal.Footer>
        </Modal>
    );
}

ModelIframe.propTypes = {
    onHide: PropTypes.func,
    show: PropTypes.bool,
};

export default ModelIframe;
