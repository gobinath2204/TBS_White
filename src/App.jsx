import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeExp from "./pages/Home";
import ContactUS from "./pages/ContactUS";
import AboutUS from "./pages/About";
import Careers from "./pages/Careers";
import P1 from "./pages/Inhousesoftwarestack";
import P2 from "./pages/EVgenericdeck";
import P3 from "./pages/HMI";
import P4 from "./pages/SMU";
import P5 from "./pages/SmartHIL";
import P6 from "./pages/DFU";
import P7 from "./pages/RTOS";
import S1 from "./pages/SystemDevelopment";
import S2 from "./pages/SoftwareEngineering";
import S3 from "./pages/HardwareEngineering";
import S4 from "./pages/SystemValidation";
import S5 from "./pages/SafetyandRegulatory";
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
            <Route path="/pages/Inhousesoftwarestack" element={<P1 />} />
            <Route path="/pages/EVgenericdeck" element={<P2 />} />
            <Route path="/pages/HMI" element={<P3 />} />
            <Route path="/pages/SMU" element={<P4 />} />
            <Route path="/pages/SmartHIL" element={<P5 />} />
            <Route path="/pages/DFU" element={<P6 />} />
            <Route path="/pages/RTOS" element={<P7 />} />
            <Route path="/pages/SystemDevelopment" element={<S1 />} />
            <Route path="/pages/SoftwareEngineering" element={<S2 />} />
            <Route path="/pages/HardwareEngineering" element={<S3 />} />
            <Route path="/pages/SystemValidation" element={<S4 />} />
            <Route path="/pages/SafetyandRegulatory" element={<S5 />} />
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