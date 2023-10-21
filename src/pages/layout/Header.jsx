import Banner from "./Banner";
import "./Header.css";

const Header = () => {
    return (
        <>
            <Banner />
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
        </>
    );
};

export default Header;
