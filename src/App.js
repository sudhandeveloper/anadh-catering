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
import ScrollToTop from "./components/scroll-to-top";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
             <Home />  <ScrollToTop />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ScrollToTop /> <Aboutus />
            </>
          }
        />
        <Route
          path="/Service"
          element={
            <>
              <ScrollToTop />
              <Services />
            </>
          }
        />
        <Route
          path="/Menu"
          element={
            <>
              <ScrollToTop /> <Menu />
            </>
          }
        />
        <Route
          path="/FixedMenu"
          element={
            <>
              <ScrollToTop />
              <FixedMenu />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <ScrollToTop /> <Contactss />
            </>
          }
        />
        <Route
          path="/Gallary"
          element={
            <>
              <ScrollToTop />
              <Gallary />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
