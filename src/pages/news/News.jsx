import { useRef, useContext, useEffect, useState } from "react";
import "./News.css";
// import { Link } from "react-router-dom";
import { dataNews } from "./dataNews";
import { ImageSlideContext } from "../../store/ImageSlideContext.jsx";
import Layout from "../layout/Layout";
import SliceShow from "./SliceShow";
import Fade from "react-reveal/Fade";
// const result = import.meta.globEager("../../../public/img/news2/*");

const News = () => {
    const dataRef = useRef(dataNews);
    const [slide, changeSlide] = useContext(ImageSlideContext);
    const [state, setState] = useState(false);

    useEffect(() => {
        dataRef.current = dataNews;
    }, []);

    const handleClick = (e, item) => {
        e.preventDefault();
        if (item?.to.toString().startsWith("http")) {
            window.open(item.to, "_blank");
        } else {
            changeSlide(item?.to.toString().startsWith("http") ? null : item);
            setState(true);
        }
    };

    return (
        <Layout title="News" totop={false}>
            <div className="news_title">
                {dataRef.current && slide?.to.length > 0 ? (
                    <SliceShow auto={5000} />
                ) : (
                    <Fade left cascade>
                        {dataRef.current?.map((item) => (
                            <div
                                key={item.id}
                                className="news_title_main"
                                style={{
                                    flexDirection: item.swap ? "row-reverse" : "row",
                                }}
                            >
                                <div
                                    className={"news_title_main_img "}
                                    style={{
                                        alignItems: item.swap ? "flex-end" : "flex-start",
                                    }}
                                    onClick={(e) => handleClick(e, item)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.id}
                                        className={"anim-right-in "}
                                    />
                                </div>
                                <div className="news_title_main_date ">
                                    <p>{item.date}</p>
                                    <hr />
                                </div>
                                <div
                                    className="news_title_main_text"
                                    style={{
                                        textAlign: item.swap ? "left" : "right",
                                    }}
                                >
                                    <p>{item.title}</p>
                                    <button
                                        style={{ textAlign: item.swap ? "start" : "end" }}
                                        onClick={(e) => handleClick(e, item)}
                                    >
                                        read more
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Fade>
                )}
            </div>
        </Layout>
    );
};

export default News;
