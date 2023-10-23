import { useRef, useContext, useEffect } from "react";
import "./News.css";
// import { Link } from "react-router-dom";
import { dataNews } from "./dataNews";
import { ImageSlideContext } from "../../store/DataContext";
import Layout from "../layout/Layout";
import SliceShow from "./SliceShow";
// const result = import.meta.globEager("../../../public/img/news2/*");

const News = () => {
    const dataRef = useRef(dataNews);
    const [slide, changeSlide] = useContext(ImageSlideContext);

    useEffect(() => {
        dataRef.current = dataNews;
    }, []);

    const handleClick = (e, item) => {
        e.preventDefault();
        if (item?.to.toString().startsWith("http")) {
            window.open(item.to, "_blank");
        } else {
            changeSlide(item?.to.toString().startsWith("http") ? null : item);
        }
    };

    return (
        <Layout totop={false}>
            <div className="news_title">
                {dataRef.current && slide?.to.length > 0 ? (
                    <SliceShow auto={5000} />
                ) : (
                    dataRef.current?.map((item) => (
                        <div
                            key={item.id}
                            data-section
                            id={`slide-${item.id}`}
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
                                <img src={item.src} alt={item.id} className={"anim-right-in "} />
                            </div>
                            <article
                                className={
                                    slide?.to.length > 0
                                        ? "anim-zoom-out"
                                        : "news_title_main_date anim-zoom-in"
                                }
                            >
                                <p>{item.date}</p>
                                <hr />
                            </article>
                            <article
                                className={
                                    item.swap || slide?.to.length > 0
                                        ? "news_title_main_text anim-left-in"
                                        : "news_title_main_text anim-right-in"
                                }
                                style={{
                                    textAlign: item.swap ? "left" : "right",
                                }}
                            >
                                <p
                                    className={
                                        slide?.to.length > 0 && item.swap
                                            ? "anim-right-in"
                                            : "anim-left-in"
                                    }
                                >
                                    {item.title}
                                </p>
                                <button
                                    style={{ textAlign: item.swap ? "start" : "end" }}
                                    className={
                                        slide?.to.length > 0 && item.swap
                                            ? "anim-right-in"
                                            : "anim-left-in"
                                    }
                                    onClick={(e) => handleClick(e, item.to)}
                                >
                                    read more
                                </button>
                            </article>
                        </div>
                    ))
                )}
            </div>
        </Layout>
    );
};

export default News;
