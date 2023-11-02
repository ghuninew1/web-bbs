import "./Banner.css";
import Image from "react-bootstrap/Image";

function Banner() {
    return (
        <div className={"banner-container"}>
            <Image src="/img/logo.gif" className="banner-logo" />
        </div>
    );
}

export default Banner;
