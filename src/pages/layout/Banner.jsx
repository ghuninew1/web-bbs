import "./Banner.css";
import { useEffect, useState } from "react";

function Banner() {
    const [timeOut, setTimeOut] = useState(false);
    const [className, setClassName] = useState("banner-bg anim-zoom-in");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimeOut(true);
            setClassName("banner-bg banner-bg--active anim-zoom-out");
        }, 5000);

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div className={timeOut ? "" : "container"}>
            <div className={className} />
        </div>
    );
}

export default Banner;
