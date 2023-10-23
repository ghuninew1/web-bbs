import { Outlet } from "react-router-dom";
import NavBar from "./pages/layout/navbar/NavBar";
import Footer from "./pages/layout/Footer";
import Header from "./pages/layout/Header";
// import ScrollListener from "./component/ScrollListener";
// import UseScroll from "./component/UseScroll";
// import { TimeMer } from "./component/utils";

export default function Root() {
    return (
        <>
            <header className="">
                <Header />
                <NavBar />
            </header>

            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
