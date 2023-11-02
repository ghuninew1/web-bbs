import { Link } from "react-router-dom";
import { links, linksUp } from "./FootData";
import Container from "react-bootstrap/Container";
import "./Footer.css";
import Anim from "../../component/Anim";
import Image from "react-bootstrap/Image";

const Footter = () => {
    return (
        <>
            <Anim type={"slideInUp"} delay={1000} duration={1000} className="mb-4 mt-4 border-top">
                <footer className="d-flex row mt-3 m-0 p-0">
                    <Container className="col-md-5 footer-left">
                        <p>151 Sukhumvit 101/1, Bangchak,</p>
                        <p>Phrakhanong, Bangkok 10260, Thailand</p>
                        <p>Copyright ©Big Brain Studio</p>
                    </Container>
                    <Container className="footer-center col-md-2 text-decoration-none">
                        <span className="footer-center-down ">
                            {links.map((link, index) => (
                                <Link key={index} to={link.to}>
                                    <Image src={link.src} alt={link.name} roundedCircle />
                                </Link>
                            ))}
                            <div className="footer-center-up">
                                {linksUp.map((link, index) => (
                                    <Link key={index} to={link.to}>
                                        <Image src={link.src} alt={link.name} roundedCircle />
                                    </Link>
                                ))}
                            </div>
                        </span>
                    </Container>

                    <ul className="footer-right col-md-5 ">
                        <li className="">
                            <a href="mailto:iambigbrainstudio@gmail.com" className="footer-item ">
                                Email: contact@bigbrain-studio.com
                            </a>
                        </li>
                        <li className="footer-item2  ">
                            <p>
                                Fax: +662 118 3624 <span>Tel: +662 118 3920</span>
                            </p>
                        </li>
                        <li className="footer-item3 ">
                            <p>Cell: +669 4539 5991</p>
                        </li>
                    </ul>
                </footer>
            </Anim>
        </>
    );
};

export default Footter;
