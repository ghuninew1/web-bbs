import { useState, useEffect, useRef } from "react";

const ActiveSection = () => {
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        });

        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll("[data-section]");

        sections.forEach((section) => {
            observer.current.observe(section);
        });
        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);
    const activeStyle = {
        fontWeight: "bold",
        color: "red",
        textDecoration: "underline",
    };

    console.log(activeSection);

    return (
        <>
            <nav style={{ position: "fixed", top: 0 }}>
                <ul style={{ listStyle: "none", display: "flex", margin: 0, padding: 0 }}>
                    <li
                        className={activeSection === "section1" ? "active" : ""}
                        style={{ margin: "0 10px" }}
                    >
                        <a href="#section1" style={activeSection === "section1" ? activeStyle : {}}>
                            Section 1
                        </a>
                    </li>

                    <li
                        className={activeSection === "section2" ? "active" : ""}
                        style={{ margin: "0 10px" }}
                    >
                        <a href="#section2" style={activeSection === "section2" ? activeStyle : {}}>
                            Section 2
                        </a>
                    </li>
                    <li
                        className={activeSection === "section3" ? "active" : ""}
                        style={{ margin: "0 10px" }}
                    >
                        <a href="#section3" style={activeSection === "section3" ? activeStyle : {}}>
                            Section 3
                        </a>
                    </li>
                </ul>
            </nav>
            <div style={{ marginTop: "40px" }}></div>
        </>
    );
};

export default ActiveSection;
