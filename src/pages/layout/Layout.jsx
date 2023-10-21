// import { useState } from "react";
import PropTypes from "prop-types";
import "./Layout.css";

const Layout = ({ children }) => {
    return <div className={"layout"}>{children}</div>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
