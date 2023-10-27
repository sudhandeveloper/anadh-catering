import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header-and-footer/header";
import Footer from "./components/header-and-footer/fotter";
import Home from "./pages/a-home";
import Aboutus from "./pages/about-us";
import Services from "./pages/service";
import Contactss from "./pages/contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Contact" element={<Contactss />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
