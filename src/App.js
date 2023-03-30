import Home from "./Pages/Home.js";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Err from "./Pages/Err";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Err errCode={404} />} />
    </Routes>
  );
}

export default App;
