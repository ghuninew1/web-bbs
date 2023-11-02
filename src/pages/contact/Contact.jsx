import { useState, useRef } from "react";
import "./Contact.css";
import Layout from "./../layout/Layout.jsx";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import { Col, Row, Form, Button, Image } from "react-bootstrap";
import links from "./contact.json";
import Anim from "./../../component/Anim.jsx";
// import nodemailer from "nodemailer";

const Contact = () => {
    const [contact, setContact] = useState(false);

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

        if (!name || !email || !subject) {
            throw alert("Please fill all the form");
        }

        const Smtp = {
            host: "smtp." + "gmail.com",
            port: "587",
            secure: false,
            requireTLS: true,
            auth: {
                // user: import.meta.env.VITE_EMAIL,
                // pass: import.meta.env.VITE_PASSWORD,
            },
        };

        async function sendEmail() {
            const transporter = nodemailer.createTransport(Smtp);
            const mailOptions = {
                from: "admin@bigbrain-studio.com",
                to: "aakanun43@gmail.com",
                subject: "New Contact",
                html: `<h1>name: ${data.name}</h1>
                    <h1>email: ${data.email}</h1>
                    <h1>subject: ${data.subject}</h1>`,
            };

            await transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(info);
                }
            });
        }

        sendEmail().catch((err) => console.log(err));

        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";

        alert("Thank you for contacting us! We will get back to you soon.");
    };

    return (
        <Layout title="Contact">
            <Anim type={"fadeIn"} duration={2000} delay={100}>
                <Container fluid="lg" className=" rounded mb-5 g-0 g-lg-0 g-md-0">
                    <Row className="p-3 g-0">
                        <Col lg={6} className="contact-left">
                            <Form onSubmit={handleSubmit} className="contact-form p-3 p-md-5">
                                <h1 className="text-center mb-4">Contact</h1>
                                <Form.Group className="mb-0" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Enter Name"
                                        ref={nameRef}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        ref={emailRef}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicSubject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Subject"
                                        ref={subjectRef}
                                    />
                                </Form.Group>

                                <Button variant="warning" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col
                            lg={6}
                            className="p-3 d-flex flex-column justify-content-between align-items-center contact-right "
                        >
                            <Container className="text-end h5 contact-info">
                                <h3>BIG BRAIN STUDIO CO.,LTD.</h3>
                                <p>151 Sukhumvit 101/1, Bangchak,</p>
                                <p>Phrakhanong, Bangkok 10260, Thailand</p>
                            </Container>
                            <Container
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    margin: "20px",
                                }}
                            >
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
                            <Ratio aspectRatio="16x9">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth"
                                    width="100%"
                                    height="100%"
                                    title="Googld Map"
                                    style={{ border: 0 }}
                                />
                            </Ratio>
                        </Col>
                    </Row>
                </Container>
            </Anim>
        </Layout>
    );
};

export default Contact;
