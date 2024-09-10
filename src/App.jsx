import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Apropos from "./components/Apropos/aPropos";
import Fiche from "./pages/Fiche";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <div className="wrapper">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Fiche />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
      <Footer />
      </>
  );
}
export default App