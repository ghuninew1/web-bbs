import { Outlet } from 'react-router-dom';
import NavBar from './pages/layout/navbar/NavBar';
import Footer from './pages/layout/footer/Footer';
import Header from './pages/layout/header/Header';
import Container from 'react-bootstrap/Container';
import UseScroll from './component/UseScroll';
import Banner from './pages/layout/header/Banner';

export default function Root() {
    return (
        <Container fluid className="g-0 bg-black text-white">
            <Banner />
            <div className="layout-container">
                <header>
                    <UseScroll sec={400}>
                        <Header />
                        <NavBar />
                    </UseScroll>
                </header>

                <main className="layout-main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </Container>
    );
}
