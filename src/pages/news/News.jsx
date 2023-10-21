import { useEffect, useState } from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { dataNews } from "./dataNews";
import Modal from "./Modal";

const News = () => {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [data, setData] = useState(dataNews);

    useEffect(() => {
        if (dataNews) {
            setData(dataNews);
        }
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setClickedImg(null);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.src);
    };

    const handelRotationRight = () => {
        const totalLength = data.length;
        if (currentIndex + 1 >= totalLength) {
            setCurrentIndex(0);
            const newUrl = data[0].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = data.length;
        if (currentIndex === 0) {
            setCurrentIndex(totalLength - 1);
            const newUrl = data[totalLength - 1].src;
            setClickedImg(newUrl);
            return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = data.filter((item) => {
            return data.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].src;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    return (
        <div className="news">
            <button onClick={scrollToTop} className="totop">
                to top
            </button>
            <div className={clickedImg ? "news-1 wrapper" : "news-1"}>
                {clickedImg && (
                    <Modal
                        clickedImg={clickedImg}
                        setClickedImg={setClickedImg}
                        handelRotationLeft={handelRotationLeft}
                        handelRotationRight={handelRotationRight}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        data={data}
                    />
                )}
                {data &&
                    data.map((item, index) => (
                        <div key={item.id} className={item.swap ? "news__item_warp" : "news__item"}>
                            <div
                                className="news__item__img wrapper-images"
                                onClick={() => handleClick(item, index)}
                            >
                                <img src={item.src} alt={item.id} />
                            </div>
                            <div className="news__item__date">
                                <p>{item.date}</p>
                                <hr />
                            </div>
                            <div
                                className={
                                    item.swap ? "news__item__content_warp" : "news__item__content"
                                }
                            >
                                <div>
                                    <p>{item.title}</p>
                                </div>

                                <Link to={`${item.to}`}>see more</Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default News;
