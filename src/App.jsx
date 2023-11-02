import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/home/Home.jsx";
import Studio from "./pages/studio/Studio.jsx";
import Jobs from "./pages/jobs/Jobs.jsx";
import Service from "./pages/service/Service.jsx";
import News from "./pages/news/News.jsx";
import Annoucement from "./pages/annoucement/Annoucement.jsx";
import Contact from "./pages/contact/Contact.jsx";
import UseImageSlide from "./store/ImageSlideContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
    const pages = [
        { path: "/", element: <Home /> },
        { path: "/studio", element: <Studio /> },
        {
            path: "/jobs",
            element: <Jobs />,
        },
        { path: "/service", element: <Service /> },
        {
            path: "/news",
            element: (
                <UseImageSlide>
                    <News />
                </UseImageSlide>
            ),
        },
        { path: "/annoucement", element: <Annoucement /> },
        { path: "/contact", element: <Contact /> },
    ];
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />,
            children: [...pages],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
