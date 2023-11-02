import { Outlet } from "react-router-dom";
import NavBar from "./pages/layout/navbar/NavBar";
import Footer from "./pages/layout/Footer";
import Header from "./pages/layout/Header";
import Container from "react-bootstrap/Container";
import UseScroll from "./component/UseScroll";
import Banner from "./pages/layout/Banner";
import Anim from "./component/Anim";

export default function Root() {
    return (
        <>
            <Banner />
            <div className="layout-container">
                <header>
                    <UseScroll sec={300}>
                        <Header />
                        <NavBar />
                    </UseScroll>
                </header>

                <main className="layout-main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
