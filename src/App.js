import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header-and-footer/header";
import Footer from "./components/header-and-footer/fotter";
import Home from "./pages/a-home";
import Aboutus from "./pages/about-us";
import Services from "./pages/service";
import Menu from "./pages/menu";
import FixedMenu from "./pages/fixed-menu";
import Gallary from "./pages/gallary";
import Contactss from "./pages/contact";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/Service" element={<Services />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/FixedMenu" element={<FixedMenu />} />
        <Route path="/Contact" element={<Contactss />} />
        <Route path="/Gallary" element={<Gallary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
