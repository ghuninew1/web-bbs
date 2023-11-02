import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import navLinks from "./navLinks.js";
import { FiMenu } from "react-icons/fi";
import "./NavBar.css";
import { Container, Navbar, Image } from "react-bootstrap";
// import { Link, Element } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const NavBar = () => {
    const { LinksMain } = navLinks();
    const [boolean, setBoolean] = useState(false);

    const handleToggle = () => {
        // const nav = document.querySelector(".navbar-collapse");
        // nav.classList.toggle("show");
        setBoolean(!boolean);
    };

    // const scrollTo = (ref) => {
    //     if (ref /* + other conditions */) {
    //         ref.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    //     }
    // };

    const scrollTo = () => {
        setBoolean(false);
        if (window.innerWidth > 768) {
            scroll.scrollTo(573, {
                duration: 500,
                delay: 0,
                smooth: "easeInCubic",
            });
        } else {
            scroll.scrollTo(20, {
                duration: 400,
                delay: 0,
                smooth: "easeInCubic",
            });
        }
    };

    return (
        <div className="border-bottom bg-dark">
            <Navbar expand="md" expanded={boolean} className="p-0 mx-1">
                <Container fluid="lg" className="g-0">
                    <Navbar.Brand>
                        <Link to="/" className="nav-logo-li mx-1">
                            <Image src="/img/apple-icon-180x180.webp" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        style={{
                            backgroundColor: boolean ? "#d77f2d" : "#000",
                            color: boolean ? "#000" : "#fff",
                        }}
                        onClick={handleToggle}
                    >
                        <FiMenu className="nav-icon" />
                    </Navbar.Toggle>
                    <Navbar.Collapse>
                        {LinksMain &&
                            LinksMain.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === "/" ? true : false}
                                    className={` nav-link text-center  `}
                                    onClick={scrollTo}
                                >
                                    {link.name && link.name}
                                </NavLink>
                            ))}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;
