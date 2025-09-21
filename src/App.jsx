import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/p1" element={<P1 />} />
        <Route path="/pages/p2" element={<P2 />} />
        <Route path="/pages/p3" element={<P3 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}