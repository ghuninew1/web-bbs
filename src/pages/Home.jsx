import React from "react";
import Layout from "./layout/Layout";
// import YouTube from "react-youtube";

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
            <h1>Showreel</h1>

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                {/* <YouTube videoId="BuuDEn1r8GY" opts={opts} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
