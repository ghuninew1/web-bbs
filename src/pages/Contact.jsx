import "./Contact.css";
import Layout from "./layout/Layout";
import Fade from "react-reveal/Fade";

const Contact = () => {
    const links = [
        {
            to: "https://www.facebook.com/BigBrainStudiooo/",
            src: "/ft/facebook.webp",
            name: "Facebook",
        },
        {
            to: "https://www.youtube.com/channel/UCRzFBsaHEEDe57EyQ48LQHQ",
            src: "/ft/youtube.webp",
            name: "Youtube",
        },
        {
            to: "https://www.instagram.com/bigbrain_studio/",
            src: "/ft/instagram.webp",
            name: "Instagram",
        },
        {
            to: "tel:+66945395991",
            src: "/ft/whatapp.webp",
            name: "Whatapp",
        },
        {
            to: "https://vimeo.com/user140518698",
            src: "/ft/vimeo.webp",
            name: "Vimeo",
        },
        {
            to: "http://www.linkedin.com/in/bigbrain-studio",
            src: "/ft/linkedin.webp",
            name: "Linkedin",
        },
    ];

    return (
        <Layout>
            <div className="Contacts">
                <div className="Contacts-1">
                    <Fade left>
                        <div className="Contacts-left">
                            <form action="">
                                <h1>Contact</h1>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Subject" />
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Message"
                                ></textarea>
                                <button>Send</button>
                            </form>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="Contacts-2">
                            <div className="Contacts-3">
                                <div className="Contacts-6">
                                    <h2>BIG BRAIN STUDIO CO.,LTD.</h2>
                                    <p>151 Sukhumvit 101/1, Bangchak,</p>
                                    <p>Phrakhanong, Bangkok 10260, Thailand</p>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "20px",
                                    }}
                                >
                                    {links.map((link, idx) => (
                                        <a
                                            href={link.to}
                                            target="_blank"
                                            rel="noreferrer"
                                            key={idx}
                                            style={{ margin: "0 5px", maxWidth: "60px" }}
                                        >
                                            <img
                                                key={idx}
                                                src={link.src}
                                                alt={link.name}
                                                style={{ width: "100%" }}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="Contacts-4">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.556153671707!2d100.61402207619273!3d13.684731498840582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a16b35ceceb5%3A0xe527940423e3cdf1!2sBig%20Brain%20Studio%20Co.%2CLtd.!5e0!3m2!1sth!2sth!4v1686721116416!5m2!1sth!2sth"
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    title="Googld Map"
                                    style={{ border: 0 }}
                                />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
