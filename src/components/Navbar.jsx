import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Scroll to section if hash exists
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const targetId = location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // ✅ Handle navigation to Home + section
  const handleSectionNav = (hash) => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On another page → go to home and set hash
      navigate("/" + "#" + hash);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-text"> <img src="logo.png" alt="Logo" /> </span>
        </a>

        {/* Mobile Menu Toggle */}
      <div 
        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

        <ul className={`nav-items ${isMobileMenuOpen ? 'active' : ''}`} >
          <li><Link className="font" onClick={() => handleSectionNav("home")}>Home</Link></li>
          <li><Link className="font" onClick={() => handleSectionNav("about")}>About</Link></li>
          <li><Link className="font" onClick={() => handleSectionNav("services")}>Services</Link></li>
          <li><Link className="font" onClick={() => handleSectionNav("products")}>Products</Link></li>
          {/* Separate pages */}
          <li><Link className="font" to="/careers">Careers</Link></li>
          <li><Link className="font" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
