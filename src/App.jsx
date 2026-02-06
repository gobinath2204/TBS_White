import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeExp from "./pages/Home";
import ContactUS from "./pages/ContactUS";
import AboutUS from "./pages/About";
import Careers from "./pages/Careers";
import P1 from "./pages/Our Products/Inhousesoftwarestack";
import P2 from "./pages/Our Products/EVgenericdeck";
import P3 from "./pages/Our Products/HMI";
import P4 from "./pages/Our Products/SMU";
import P5 from "./pages/Our Products/SmartHIL";
import P6 from "./pages/Our Products/DFU";
import P7 from "./pages/Our Products/RTOS";
import S1 from "./pages/Services/SystemDevelopment";
import S2 from "./pages/Services/SoftwareEngineering";
import S3 from "./pages/Services/HardwareEngineering";
import S4 from "./pages/Services/SystemValidation";
import S5 from "./pages/Services/SafetyandRegulatory";
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
            <Route path="/pages/Our Products/Inhousesoftwarestack" element={<P1 />} />
            <Route path="/pages/Our Products/EVgenericdeck" element={<P2 />} />
            <Route path="/pages/Our Products/HMI" element={<P3 />} />
            <Route path="/pages/Our Products/SMU" element={<P4 />} />
            <Route path="/pages/Our Products/SmartHIL" element={<P5 />} />
            <Route path="/pages/Our Products/DFU" element={<P6 />} />
            <Route path="/pages/Our Products/RTOS" element={<P7 />} />
            <Route path="/pages/Services/SystemDevelopment" element={<S1 />} />
            <Route path="/pages/Services/SoftwareEngineering" element={<S2 />} />
            <Route path="/pages/Services/HardwareEngineering" element={<S3 />} />
            <Route path="/pages/Services/SystemValidation" element={<S4 />} />
            <Route path="/pages/Services/SafetyandRegulatory" element={<S5 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/admin"    element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;