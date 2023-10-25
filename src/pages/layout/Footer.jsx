import { Link } from "react-router-dom";
import "./Footer.css";
import { links, linksUp } from "./FootData";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
    return (
        <>
            <footer className="border-top footer">
                <Zoom bottom cascade>
                    <div className="footer-left">
                        <div>
                            <p>151 Sukhumvit 101/1, Bangchak,</p>
                            <p>Phrakhanong, Bangkok 10260, Thailand</p>
                        </div>
                        <br />
                        <div>
                            <p>Copyright ©Big Brain Studio</p>
                        </div>
                    </div>

                    <div className="footer-center">
                        <div>
                            {links.map((link, index) => (
                                <Link key={index} to={link.to}>
                                    <img src={link.src} alt={link.name} />
                                </Link>
                            ))}
                        </div>
                        <div>
                            {linksUp.map((link, index) => (
                                <Link key={index} to={link.to}>
                                    <img src={link.src} alt={link.name} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="footer-right">
                        <div>
                            <p>
                                Email:&nbsp;
                                <Link to="mailto:iambigbrainstudio@gmail.com">
                                    iambigbrainstudio@gmail.com
                                </Link>
                            </p>
                        </div>
                        <br />
                        <div>
                            <p>Fax: +662 118 3624&nbsp; Tel: &nbsp;+662 118 3920</p>
                            <p>Cell: +669 4539 5991</p>
                        </div>
                    </div>
                </Zoom>
            </footer>
        </>
    );
};

export default Footer;
