const navLinks = () => {
    const LinksMain = [
        { to: "/", name: "Home", hidden: false, login: false },
        { to: "/studio", name: "Studio", hidden: false, login: false },
        { to: "/jobs", name: "Jobs", hidden: false, login: false },
        { to: "/service", name: "Service", hidden: false, login: false },
        { to: "/news", name: "News", hidden: false, login: false },
        { to: "/annoucement", name: "Annoucement", hidden: false, login: false },
        { to: "/contact", name: "Contact", hidden: false, login: false },
    ];
    const LoginLink = [
        { to: "/signin", name: "Signin", hidden: false, login: false },
        { to: "/signup", name: "Signup", hidden: false, login: false },
    ];
    const DropdownLink = [{ to: "/profile", name: "Profile", hidden: false, login: true }];

    return { LinksMain, LoginLink, DropdownLink };
};

export default navLinks;
