import "./Header.css";
import { Anim } from "../../component/Anim";

const Header = () => {
    return (
        <Anim type={"fadeInUp"} delay={300} className={"header-page"}>
            <p className="header-banner">
                BIG BRAIN<span>STUDIO</span>
            </p>
            <span className="header-banner-text">
                <p>
                    Create<span>the</span>Creation<span>of</span>
                    Animation Intellectual Properties<span>and</span>Contents.
                </p>
            </span>
        </Anim>
    );
};

export default Header;
