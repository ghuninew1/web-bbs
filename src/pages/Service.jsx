// import { useState, useEffect, useRef } from "react";
import Layout from "./layout/Layout";
import "./Service.css";
import Zoom from "react-reveal/Zoom";

const Service = () => {
    const items = [
        {
            src: "/img/service/vfx.webp",
            width: "135px",
            high: "79px",
            alt: "Visual Effects",
            id: 1,
            position: "380px 20px",
        },
        {
            src: "/img/service/layout.webp",
            width: "163px",
            high: "79px",
            alt: "Layout",
            id: 2,
            position: "380px 20px",
        },
        {
            src: "/img/service/rendering.webp",
            width: "146px",
            high: "58px",
            alt: "Animation",
            id: 3,
        },
        {
            src: "/img/service/texture.webp",
            width: "176px",
            high: "92px",
            alt: "Color",
            id: 4,
        },
        {
            src: "/img/service/storyboard.webp",
            width: "152px",
            high: "83px",
            alt: "Rotoscoping",
            id: 5,
        },
        {
            src: "/img/service/short.webp",
            width: "174px",
            high: "94px",
            alt: "short",
            id: 6,
        },
        {
            src: "/img/service/script.webp",
            width: "146px",
            high: "70px",
            alt: "script",
            id: 7,
        },
        {
            src: "/img/service/development.webp",
            width: "196px",
            high: "78px",
            alt: "development",
            id: 8,
        },
        {
            src: "/img/service/lighting.webp",
            width: "218px",
            high: "97px",
            alt: "lighting",
            id: 9,
        },
        {
            src: "/img/service/production.webp",
            width: "166px",
            high: "80px",
            alt: "production",
            id: 10,
        },
        {
            src: "/img/service/rigging.webp",
            width: "111px",
            high: "53px",
            alt: "rigging",
            id: 11,
        },
        {
            src: "/img/service/long.webp",
            width: "95px",
            high: "55px",
            alt: "long",
            id: 12,
        },
        {
            src: "/img/service/model.webp",
            width: "199px",
            high: "99px",
            alt: "model",
            id: 13,
        },
        {
            src: "/img/service/series.webp",
            width: "138px",
            high: "81px",
            alt: "series",
            id: 14,
        },
        {
            src: "/img/service/tvc.webp",
            width: "97px",
            high: "63px",
            alt: "tvc",
            id: 15,
        },
        {
            src: "/img/service/creative.webp",
            width: "246px",
            high: "96px",
            alt: "creative",
            id: 16,
        },
        {
            src: "/img/service/interlectual.webp",
            width: "214px",
            high: "103px",
            alt: "interlectual",
            id: 17,
        },
        {
            src: "/img/service/post_pro.webp",
            width: "125px",
            high: "57px",
            alt: "post_pro",
            id: 18,
        },
        {
            src: "/img/service/composite.webp",
            width: "229px",
            high: "88px",
            alt: "composite",
            id: 19,
        },
        {
            src: "/img/service/conceptual.webp",
            width: "185px",
            high: "91px",
            alt: "conceptual",
            id: 20,
        },
        {
            src: "/img/service/animation.webp",
            width: "244px",
            high: "116px",
            alt: "animation",
            id: 21,
        },
        {
            src: "/img/service/3d.webp",
            width: "110px",
            high: "74px",
            alt: "3d",
            id: 22,
        },
        {
            src: "/img/service/previs.webp",
            width: "136px",
            high: "65px",
            alt: "previs",
            id: 23,
        },
        {
            src: "/img/service/pre_pro.webp",
            width: "148px",
            high: "73px",
            alt: "pre_pro",
            id: 24,
        },
        {
            src: "/img/service/2d.webp",
            width: "98px",
            high: "69px",
            alt: "2d",
            id: 25,
        },
    ];
    return (
        <Layout title="Service">
            <div className="service-page">
                <Zoom bottom cascade>
                    <div className="service-title">
                        {items &&
                            items.map((item, idx) => (
                                <span key={idx} className={`service-item-${item.id}`}>
                                    <img
                                        src={item.src}
                                        width={item.width}
                                        high={item.high}
                                        alt={item.alt}
                                    />
                                </span>
                            ))}
                    </div>
                </Zoom>
            </div>
        </Layout>
    );
};

export default Service;
