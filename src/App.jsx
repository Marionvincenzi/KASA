import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Apropos from "./components/Apropos/aPropos";
function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;