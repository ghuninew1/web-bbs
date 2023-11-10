import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import navLinks from './navLinks.js';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../../assets/logo.webp';
import { TfiClose, TfiMenu } from 'react-icons/tfi';

const NavBar = () => {
    const { LinksMain } = navLinks();
    const [boolean, setBoolean] = useState(false);

    const handleToggle = () => {
        setBoolean(!boolean);
    };

    const scrollTo = () => {
        setBoolean(false);
        if (window.innerWidth > 768) {
            scroll.scrollTo(573, {
                duration: 500,
                delay: 0,
                smooth: 'easeInCubic',
            });
        } else {
            scroll.scrollTo(20, {
                duration: 400,
                delay: 0,
                smooth: 'easeInCubic',
            });
        }
    };

    return (
        <div className="navmain">
            <Navbar expand="md" expanded={boolean} className=" bg-black px-1">
                <Container fluid className="g-0">
                    <Navbar.Brand>
                        <Link to="/" className="nav-logo-li mx-1 ">
                            <Image src={Logo} fluid />
                        </Link>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        style={{
                            backgroundColor: boolean ? "#773f1946" : "",
                        }}
                        onClick={handleToggle}
                        className="mx-1"
                    /> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        style={{
                            backgroundColor: boolean ? '#d77f2d' : '',
                        }}
                        onClick={handleToggle}
                    >
                        {boolean ? <TfiClose /> : <TfiMenu />}
                    </button>

                    <Navbar.Collapse>
                        {LinksMain &&
                            LinksMain.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    end={link.to === '/' ? true : false}
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
