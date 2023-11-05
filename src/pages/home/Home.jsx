import Layout from "../layout/Layout";
import Partner from "./Partner";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import "./Home.css";
import Anim from "../../component/Anim";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Home = () => {
    return (
        <Layout title="Home">
            <Anim type={"zoomIn"} duration={800} delay={100} className={"home"}>
                <h1 className="text-center">Showreel</h1>
                <Container fluid="lg" className="g-0">
                    <Ratio aspectRatio="16x9">
                        <LiteYouTubeEmbed
                            id="BuuDEn1r8GY"
                            title="Showreel"
                            noCookie={true}
                            poster="maxresdefault"
                        />
                    </Ratio>
                </Container>
            </Anim>
            <Anim type={"zoomIn"} duration={900} delay={800}>
                <Partner />
            </Anim>
        </Layout>
    );
};

export default Home;
