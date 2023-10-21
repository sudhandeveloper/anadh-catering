import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header-and-footer/header";
import Home from "./pages/a-home";
function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
