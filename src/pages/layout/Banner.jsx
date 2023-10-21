import "./Banner.css";
import { useEffect, useState } from "react";

function Banner() {
    // const [timeOut, setTimeOut] = useState(false);
    const [className, setClassName] = useState("banner-bg");

    useEffect(() => {
        const timeOut = setTimeout(() => {
            // setTimeOut(true);
            setClassName("banner-bg banner-bg--active");
        }, 5000);

        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div className="container">
            <div className={className} />
        </div>
    );
}

export default Banner;
