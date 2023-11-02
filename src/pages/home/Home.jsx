import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Partner from "./Partner";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import "./Home.css";
import Anim from "../../component/Anim";

const Home = () => {
    return (
        <Layout title="Home">
            <Anim type={"zoomIn"} duration={800} delay={100} className={"home"}>
                <h1 className="text-center">Showreel</h1>
                <Container fluid="lg" className="p-lg-0 g-0 ">
                    <Ratio aspectRatio="16x9">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/BuuDEn1r8GY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </Ratio>
                </Container>
            </Anim>
            <Anim type={"zoomIn"} duration={900} delay={800} style={{ marginTop: "5rem" }}>
                <Partner />
            </Anim>
        </Layout>
    );
};

export default Home;
