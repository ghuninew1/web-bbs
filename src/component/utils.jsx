import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const ToLocalDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("th-TH");
};

export const ToLocalTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString("th-TH");
};

export const IsData = (data) => {
    if (data !== null && data !== undefined && data) return data;
};

export const IsDataArray = (data) => {
    if (data !== null && data !== undefined && data.length > 0) return data;
};

export const IsDataObject = (data) => {
    if (data !== null && data !== undefined && Object.keys(data).length > 0) return data;
};

export const IsDataObjectArray = (data) => {
    if (data !== null && data !== undefined && data.length > 0 && Object.keys(data[0]).length > 0)
        return data;
};

export const IsHidden = (data) => {
    if (data === null || data === undefined || data === "") return data ? true : false;
};

export const Image = ({ src, alt, width, maxHeight }) => {
    const showImage = (e) => {
        e.preventDefault();
        const img = document.createElement("img");
        img.src = e.target.src;
        img.style.maxWidth = "80%";
        img.style.maxHeight = "80%";
        img.style.position = "fixed";
        img.style.top = 0;
        img.style.left = 0;
        img.style.marginLeft = "10%";
        img.style.marginTop = "5%";
        img.style.zIndex = 1000;
        img.style.backgroundColor = "rgba(0,0,0,0.5)";
        img.style.cursor = "zoom-out";
        img.style.borderRadius = "5px";
        img.style.boxShadow = "0 0 10px 0 rgba(0,0,0,0.5)";
        img.onclick = () => {
            img.remove();
        };

        document.getElementById("preview-img").appendChild(img);
        return false;
    };

    return (
        <img
            src={src ? src : "/images/404.png"}
            alt={alt ? alt : "404"}
            style={{
                width: width ? width : "auto",
                maxHeight: maxHeight ? maxHeight : "40px",
                cursor: "zoom-in",
            }}
            className="img-fluid transition"
            onClick={(e) => showImage(e)}
            onMouseUp={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
        />
    );
};

export const IsNumber = (data, tf = 6) => {
    if (data !== null && data !== undefined && data !== "" && !isNaN(data))
        return Number(data && data).toFixed(tf ? tf : 3);
};

export const IsConfirm = (message) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm === true) {
        return message;
    } else {
        return false;
    }
};

export const ResTime = (start) => {
    if (!start) return performance.now();
    const end = performance.now() - start;
    const responseTime = end.toFixed(2);
    return responseTime;
};

export const Img = ({ src, width, style, className }) => {
    return (
        <img
            src={src && src}
            alt={src ? String(src).slice(-11) : "404"}
            width={width ? width + "px" : "auto"}
            // onMouseEnter={(e) => {
            //     e.preventDefault();
            //     e.target.style.filter = "drop-shadow(0 2px 3px #1fe00aa4)";
            //     e.target.style.transition = "width 0.2s";
            // }}
            // onMouseLeave={(e) => {
            //     e.preventDefault();
            //     e.target.style.filter = "none";
            //     e.target.style.transition = "width 0.2s";
            // }}
            style={{ ...(style && style) }}
            className={className && className}
        />
    );
};

export const TimeOut = ({ timers }) => {
    const timeOut = setTimeout(() => {
        return true;
    }, timers);
    return timeOut;
};

export const TimeMer = ({ children, timers, bool }) => {
    const [boolean, setBoolean] = useState(bool ? true : false);

    useEffect(() => {
        const times = setTimeout(() => {
            setBoolean(bool ? false : true);
        }, timers);

        return () => clearTimeout(times);
    }, [timers, bool]);

    return boolean ? children : null;
};

export const UsePopUp = (data) => {
    const [popUp, setPopUp] = useState(false);

    useEffect(() => {
        setPopUp(data);
    }, [data]);

    return popUp;
};

export const ShowImage = (e) => {
    const [image, setImage] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setImage(e.target.src);
        setShow(true);
    }, [e]);

    const close = () => {
        setShow(false);
    };

    const showImage = () => {
        return (
            <div className="show-image">
                <div className="show-image__content">
                    <div className="show-image__content__img">
                        <img src={image} alt="show" />
                    </div>
                    <div className="show-image__content__close" onClick={() => close()}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
        );
    };

    return show ? showImage() : null;
};

ToLocalDate.propTypes = {
    date: PropTypes.string,
};

TimeMer.propTypes = {
    children: PropTypes.node,
    timers: PropTypes.number,
    bool: PropTypes.bool,
};

TimeOut.propTypes = {
    timers: PropTypes.number,
};

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string,
};

IsNumber.propTypes = {
    data: PropTypes.string,
    tf: PropTypes.number,
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.string,
    maxHeight: PropTypes.string,
};
