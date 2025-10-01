import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeExp from "./pages/Home";
import ContactUS from "./pages/ContactUS";
import AboutUS from "./pages/About";
import Careers from "./pages/Careers";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import P3 from "./pages/P3";
import P4 from "./pages/P4";
import P5 from "./pages/P5";
import P6 from "./pages/P6";
import P7 from "./pages/P7";
import S1 from "./pages/S1";
import S2 from "./pages/S2";
import S3 from "./pages/S3";
import S4 from "./pages/S4";
import S5 from "./pages/S5";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomeExp />} />
            <Route path="/contact" element={<ContactUS />} />
            <Route path="/about" element={<AboutUS />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/pages/P1" element={<P1 />} />
            <Route path="/pages/P2" element={<P2 />} />
            <Route path="/pages/P3" element={<P3 />} />
            <Route path="/pages/P4" element={<P4 />} />
            <Route path="/pages/P5" element={<P5 />} />
            <Route path="/pages/P6" element={<P6 />} />
            <Route path="/pages/P7" element={<P7 />} />
            <Route path="/pages/S1" element={<S1 />} />
            <Route path="/pages/S2" element={<S2 />} />
            <Route path="/pages/S3" element={<S3 />} />
            <Route path="/pages/S4" element={<S4 />} />
            <Route path="/pages/S5" element={<S5 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;