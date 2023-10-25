import Layout from "../layout/Layout";
import Partner from "./Partner";
import YouTube from "react-youtube";
import Fade from "react-reveal/Fade";
import "./Home.css";

const Home = () => {
    const opts = {
        height: "540",
        width: "960",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            enablejsapi: 1,
            playsinline: 1,
        },
    };
    return (
        <Layout>
            <div className="home">
                <Fade left cascade>
                    <h1>Showreel</h1>
                </Fade>

                <div className="home__video">
                    <YouTube videoId="BuuDEn1r8GY" opts={opts} style={{ width: "100%" }} />
                </div>

                <Partner />
            </div>
        </Layout>
    );
};

export default Home;
