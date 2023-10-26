import Banner from "./Banner";
import "./Header.css";
import { Fade } from "react-awesome-reveal";

const Header = () => {
    return (
        <>
            <Banner />
            <Fade cascade direction="up" triggerOnce>
                <div className={"Header"}>
                    <p>
                        BIG BRAIN &nbsp;<span>STUDIO</span>
                    </p>
                </div>
                <div className="Header-text">
                    <p>
                        Create&nbsp;<span> the&nbsp;</span> Creation&nbsp;<span> of&nbsp;</span>{" "}
                        Animation Intellectual Properties &nbsp; <span>and&nbsp;</span> Contents.
                    </p>
                </div>
            </Fade>
        </>
    );
};

export default Header;
