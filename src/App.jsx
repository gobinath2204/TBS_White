import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
import PageLoader from "./components/PageLoader";

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Trigger loading on location change
    setIsLoading(true);

    // Update Page Title
    const path = location.pathname;
    let title = "Test Base Solutions Ltd.";

    if (path === "/") title = "Test Base Solutions Ltd.";
    else if (path === "/contact") title = "Contact Us | TBS";
    else if (path === "/about") title = "About Us | TBS";
    else if (path === "/careers") title = "Careers | TBS";
    else if (path === "/products") title = "Our Products | TBS";
    else if (path === "/services") title = "Our Services | TBS";
    else if (path.includes("/pages/Our Products/")) {
      // Extract product name from path
      const product = path.split("/").pop().replace(/([A-Z])/g, ' $1').trim();
      title = `${product} | Products | TBS`;
    }
    else if (path.includes("/pages/Services/")) {
      const service = path.split("/").pop().replace(/([A-Z])/g, ' $1').trim();
      title = `${service} | Services | TBS`;
    }
    else if (path === "/admin") title = "Admin | TBS";

    document.title = title;

    // Simulate loading delay (or wait for resources if needed in future)
    // A small delay ensures the user sees the transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1470);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="app">
      <PageLoader isLoading={isLoading} />
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
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App;