import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <div className="wrapper">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
      <Footer />
      </>
  );
}
export default App