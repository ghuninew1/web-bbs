import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Partner from "./Partner";
import YouTube from "react-youtube";
import { Fade } from "react-awesome-reveal";
import "./Home.css";

const Home = () => {
    const opts = {
        height: "540",
        width: "960",
        playerVars: {
            autoplay: 0,
            enablejsapi: 1,
            playsinline: 1,
        },
    };
    return (
        <Layout>
            <div className="home">
                <h1>Showreel</h1>

                <div className="home-video">
                    <YouTube videoId="BuuDEn1r8GY" opts={opts} />
                </div>
                {/* <Fade delay={1000} direction="up" damping={0.1}> */}
                <Partner />
                {/* </Fade> */}
            </div>
        </Layout>
    );
};

export default Home;
