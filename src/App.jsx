// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import P1 from "./pages/P1";
// import P2 from "./pages/P2";
// import P3 from "./pages/P3";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/pages/p1" element={<P1 />} />
//         <Route path="/pages/p2" element={<P2 />} />
//         <Route path="/pages/p3" element={<P3 />} />
//       </Routes>
//     </Router>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeExp from "./pages/Home";
// import ContactUS from "./pages/ContactUS";
import AboutUS from "./pages/About";
// import Careers from "./pages/Careers";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import NavBar from "./components/Navbar";  
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomeExp />} />
            {/* <Route path="/contact" element={<ContactUS />} /> */}
            <Route path="/about" element={<AboutUS />} />
            {/* <Route path="/careers" element={<Careers />} /> */}
            <Route path="/pages/P1" element={<P1 />} />
            <Route path="/pages/P2" element={<P2 />} />
            <Route path="/pages/P3" element={<P3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
