// import { useState, useEffect, useRef } from "react";
import Layout from "./layout/Layout";
import "./Service.css";
import { Zoom } from "react-awesome-reveal";
import { ServiceData } from "./ServiceData";

const Service = () => {
    return (
        <Layout title="Service">
            <div className="service-page">
                <div className="service-title">
                    <Zoom direction="left" cascade damping={0.1} delay={300} duration={500}>
                        {ServiceData &&
                            ServiceData.map((item, idx) => (
                                <span key={idx} className={`service-item-${item.id}`}>
                                    <img
                                        src={item.src}
                                        width={item.width}
                                        high={item.high}
                                        alt={item.alt}
                                    />
                                </span>
                            ))}
                    </Zoom>
                </div>
            </div>
        </Layout>
    );
};

export default Service;
