import { Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/a-home";
function App() {
  return (
    <>
      {" "}
      <Routes>
        <Routes path="/" Element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
