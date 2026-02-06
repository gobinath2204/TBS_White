import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detection for show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle hash-based smooth scrolling for homepage sections
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSectionNav = (hash) => {
    if (location.pathname === "/") {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#" + hash);
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
        </a>

        {/* Hamburger Menu */}
        <div
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-items ${isMobileMenuOpen ? "active" : ""}`}>
          <li><Link onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} to="/">Home</Link></li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <Link to="/Services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <ul className="dropdown-menu">
              <li><Link to="/pages/Services/SystemDevelopment" onClick={() => setMobileMenuOpen(false)}>System Development</Link></li>
              <li><Link to="/pages/Services/SoftwareEngineering" onClick={() => setMobileMenuOpen(false)}>Software Engineering</Link></li>
              <li><Link to="/pages/Services/HardwareEngineering" onClick={() => setMobileMenuOpen(false)}>Hardware Engineering</Link></li>
              <li><Link to="/pages/Services/SystemValidation" onClick={() => setMobileMenuOpen(false)}>System Validation</Link></li>
              <li><Link to="/pages/Services/SafetyandRegulatory" onClick={() => setMobileMenuOpen(false)}>Safety and Regulatory</Link></li>
            </ul>
          </li>

          {/* Products Dropdown */}
          <li className="dropdown">
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <ul className="dropdown-menu">
              <li><Link to="/pages/Our Products/Inhousesoftwarestack" onClick={() => setMobileMenuOpen(false)}>In House Software Stack (COTS)</Link></li>
              <li><Link to="/pages/Our Products/EVgenericdeck" onClick={() => setMobileMenuOpen(false)}>EV Generic Deck</Link></li>
              <li><Link to="/pages/Our Products/HMI" onClick={() => setMobileMenuOpen(false)}>Human Machine Interface (HMI)</Link></li>
              <li><Link to="/pages/Our Products/SMU" onClick={() => setMobileMenuOpen(false)}>Secure Manufacturing Unit</Link></li>
              <li><Link to="/pages/Our Products/SmartHIL" onClick={() => setMobileMenuOpen(false)}>Smart HIL</Link></li>
              <li><Link to="/pages/Our Products/DFU" onClick={() => setMobileMenuOpen(false)}>Diagnostics Flashing Unit</Link></li>
              <li><Link to="/pages/Our Products/RTOS" onClick={() => setMobileMenuOpen(false)}>Free RTOS Safety Plugin</Link></li>
            </ul>
          </li>
          <li><Link onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} to="/careers">Careers</Link></li>
          <li><Link onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} to="/about">About</Link></li>
          <li><Link onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }} to="/contact">Contact</Link></li>
        </ul>
        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div className="menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
