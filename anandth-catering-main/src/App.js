import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header-and-footer/header";
import Footer from "./components/header-and-footer/fotter";
import Home from "./pages/a-home";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
