import { Outlet } from "react-router-dom";
import NavBar from "./pages/layout/navbar/NavBar";
import Footer from "./pages/layout/Footer";
import Header from "./pages/layout/Header";
// import style from "./Root.module.css";
// import ScrollListener from "./component/ScrollListener";
// import UseScroll from "./component/UseScroll";
// import { TimeMer } from "./component/utils";

// import { motion, useScroll, useSpring } from "framer-motion";

export default function Root() {
    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001,
    // });

    return (
        <div className="px-0">
            <header>
                {/* <TimeMer timers={5000} bool={true}> */}
                {/* <motion.div className="progress-bar"
                style={{ scaleX }} /> */}
                {/* </TimeMer>  */}

                <Header />
                <NavBar />
            </header>

            <main className="cover-container">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
