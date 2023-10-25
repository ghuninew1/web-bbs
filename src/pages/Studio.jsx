import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import { Img } from "../component/utils";
import Zoom from "react-reveal/Zoom";
import "./Studio.css";

const Studio = () => {
    const [state, setState] = useState(false);
    const [titles, setTitles] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(true);
        }, 500);
        const timer2 = setTimeout(() => {
            setTitles(true);
            setState(false);
        }, 2500);
        return () => clearTimeout(timer, timer2);
    }, []);

    return (
        <Layout title="Studio">
            <div className={!titles ? "Studio" : "Studio-active"}>
                {!titles ? (
                    <Zoom bottom when={state}>
                        <h1 className={"Studio-1-1-active"}>
                            <span> WE </span> CHANGED <span>THE </span>NAME!!
                        </h1>
                    </Zoom>
                ) : (
                    <>
                        <div className={titles ? "Studio-1-active" : "Studio-1"}>
                            <Zoom left>
                                <h2>Our Story :</h2>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Big Brain
                                    Studio was formerly known as <span>Big Brain Pictures. </span>
                                    The company was founded in 2013 by{" "}
                                    <span>Auchara Kijkanjanas</span>, one of the pioneers in the
                                    Computer Graphic Industry in Thailand. For 20 years of
                                    experience, her expertise and works were guaranteed by both
                                    International and Domestic awards for Animation Feature Film and
                                    VFX work.
                                </p>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At{" "}
                                    <span>Big Brain Studio</span>, We selectively assemble a team of
                                    creative, innovative and professional staff enabling us to
                                    initiate content design to meet quality demand and industry
                                    directions.
                                </p>
                                <br />
                                <h2>Our Team :</h2>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We share
                                    the same mission to deliver the utmost creative content and
                                    produce animation films with innovative techniques through
                                    sustainable business practice while pacing global trends.
                                </p>
                            </Zoom>
                        </div>
                        <Zoom right>
                            <div className={"Studio-2-active"}>
                                <Img src={"/img/sutudio/ptum.webp"} alt={"Studio-1"} />
                            </div>
                        </Zoom>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default Studio;
