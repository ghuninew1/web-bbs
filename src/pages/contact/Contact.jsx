import { useRef } from "react";
import "./Contact.css";
import Layout from "./../layout/Layout.jsx";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import links from "./contact.json";

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const subject = subjectRef.current.value;

        const data = {
            name,
            email,
            subject,
        };

        if (!name || !email || (!subject && !data)) {
            throw alert("Please fill all the form");
        }
    };

    return (
        <Layout title="Contact">
            <Container fluid="lg" className="g-0">
                <Row className="contact-row rounded">
                    <Col lg={6} className="contact-left py-3 ">
                        <Form onSubmit={handleSubmit} className="contact-form px-2 p-md-5">
                            <h1 className="text-center mb-4">Contact</h1>
                            <Form.Group className="mt-2" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" ref={nameRef} />
                            </Form.Group>
                            <Form.Group className="mt-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    ref={emailRef}
                                />
                            </Form.Group>

                            <Form.Group className="mt-3 mb-3" controlId="formBasicSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Subject"
                                    ref={subjectRef}
                                />
                            </Form.Group>

                            <Button variant="warning" type="submit" className="form-btn">
                                Submit
                            </Button>
                        </Form>
                    </Col>

                    <Col
                        lg={6}
                        className="py-3 d-flex flex-column justify-content-between align-items-center contact-right "
                    >
                        <Container className="h5 contact-info">
                            <h3>BIG BRAIN STUDIO CO.,LTD.</h3>
                            <p>151 Sukhumvit 101/1, Bangchak,</p>
                            <p>Phrakhanong, Bangkok 10260, Thailand</p>
                        </Container>
                        <Container className="d-flex justify-content-center align-items-center my-4">
                            {links.map((link, idx) => (
                                <a
                                    href={link.to}
                                    target="_blank"
                                    rel="noreferrer"
                                    key={idx}
                                    style={{ margin: "0 5px", maxWidth: "55px" }}
                                    className="contact-link"
                                >
                                    <Image src={link.src} alt={link.name} fluid />
                                </a>
                            ))}
                        </Container>
                        <Ratio aspectRatio="16x9" className="w-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth"
                                width="100%"
                                height="100%"
                                title="Googld Map"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture;"
                            />
                        </Ratio>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Contact;
