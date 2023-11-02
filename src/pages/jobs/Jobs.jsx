import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import "./Jobs.css";
import { links, jobsList } from "./jobData";
import { IoArrowForward } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

const Jobs = () => {
    const [active, setActive] = useState("jobs-img");

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            // console.log("begin", to, element);
            setActive(to);
        });

        // Events.scrollEvent.register("end", (to, element) => {
        //     console.log("end", to, element);
        // });
        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove("begin");
            Events.scrollEvent.remove("end");
        };
    }, []);

    const handleSetActive = (to) => {
        setActive(to);
    };

    const GetJobs = () => {
        return jobsList.map((job, idx) => (
            <Row key={idx} className="mt-5 pt-5 mb-5 jobs-row">
                <Col md={12} className="mt-5 py-5">
                    <Element name={`job${idx}`}>
                        <Card className="jobs-requirements">
                            <Card.Img variant="top" src={`/img/jobs/icon_jobs_${idx + 1}.webp`} />
                            <Card.Body>
                                <Card.Title>
                                    <h2> {job.name}</h2>
                                    <h5>{job.jobdescription.title}</h5>
                                </Card.Title>
                                <p>{job.jobdescription.description}</p>
                            </Card.Body>
                            <Card.Body>
                                <h5>{job.requirements.title}</h5>
                                {job.requirements.list.map((requirement, idxx) => (
                                    <li key={idxx}>{requirement}</li>
                                ))}
                            </Card.Body>
                        </Card>
                    </Element>
                </Col>
            </Row>
        ));
    };

    return (
        <Layout title="Jobs">
            <Link
                to="jobs-img"
                spy={true}
                smooth={true}
                offset={-250}
                duration={500}
                onSetActive={handleSetActive}
            />
            <div className={active === "jobs-img" ? "jobs-img-active" : "jobs-img"}>
                <Element name="jobs-img">
                    <Image src="/img/jobs/we_need_you.webp" width={300} />
                </Element>
            </div>

            <ul className={active !== "jobs-img" ? "jobs-menu-active" : "jobs-menu"}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            key={index}
                            to={`job${index}`}
                            spy={true}
                            smooth={true}
                            offset={-250}
                            duration={500}
                            onSetActive={handleSetActive}
                        >
                            {active === `job${index}` && <IoArrowForward className="jobs-icon" />}
                            <span className={active === `job${index}` ? "jobs-link-active" : ""}>
                                {link.name && link.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <Container className="jobs-container">
                <GetJobs />
            </Container>
        </Layout>
    );
};

export default Jobs;
