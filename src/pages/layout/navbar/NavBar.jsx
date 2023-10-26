import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import navLinks from "./navLinks.js";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";
import { Fade } from "react-awesome-reveal";

const NavBar = () => {
    const { LinksMain } = navLinks();
    const [boolean, setBoolean] = useState(false);

    const handleToggle = () => {
        setBoolean(!boolean);
    };

    return (
        <nav className="navbar" id="navbarMain">
            <Link to="/" className="nav-logo-li mount">
                <img src="/img/apple-icon-180x180.webp" alt="logo" />
            </Link>

            <ul className="nav-links">
                <label className={"hamburger"} onClick={handleToggle}>
                    {!boolean === true ? <FiMenu /> : <FiX />}
                </label>
                <Fade direction="down" delay={500} damping={0.1}>
                    <div>
                        <li>
                            {LinksMain &&
                                LinksMain.map((link) => (
                                    <NavLink
                                        key={link.name}
                                        to={link.to}
                                        end={link.to === "/" ? true : false}
                                    >
                                        {link.name && link.name}
                                    </NavLink>
                                ))}
                        </li>
                    </div>
                    <li className="nav-mobie">
                        {LinksMain &&
                            boolean &&
                            LinksMain.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === "/" ? true : false}
                                    onClick={handleToggle}
                                >
                                    {link.name && link.name}
                                </NavLink>
                            ))}
                    </li>
                </Fade>
            </ul>
        </nav>
    );
};

export default NavBar;
