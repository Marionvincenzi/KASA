import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Error404, Home, Logement } from "../../pages";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Apropos from "../Apropos/aPropos";

const Navigation = () => {
    return (
        <BrowserRouter>
        <div className="wrapper">
            <div className="container">
                <Navbar />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/Apropos" element={<Apropos />} />
                        <Route exact path="/Logement/:id" element={<Logement />} />
                        <Route exact path="/Error404" element={<Error404 />} />
                        <Route exact path="/*" element={<Navigate replace to="/Error404" />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </div>
        </BrowserRouter>
    )
}

export default Navigation