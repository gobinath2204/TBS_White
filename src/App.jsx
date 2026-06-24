import { HashRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import PageLoader from "./components/PageLoader";

// Lazy loaded pages
const HomeExp = lazy(() => import("./pages/Home"));
const ContactUS = lazy(() => import("./pages/ContactUS"));
const AboutUS = lazy(() => import("./pages/About"));
const Careers = lazy(() => import("./pages/Careers"));
const P1 = lazy(() => import("./pages/Our Products/Inhousesoftwarestack"));
const P2 = lazy(() => import("./pages/Our Products/EVgenericdeck"));
const P3 = lazy(() => import("./pages/Our Products/HMI"));
const P4 = lazy(() => import("./pages/Our Products/SMU"));
const P5 = lazy(() => import("./pages/Our Products/SmartHIL"));
const P6 = lazy(() => import("./pages/Our Products/DFU"));
const S1 = lazy(() => import("./pages/Services/SystemEngineering"));
const S2 = lazy(() => import("./pages/Services/SoftwareEngineering"));
const S3 = lazy(() => import("./pages/Services/HardwareEngineering"));
const S4 = lazy(() => import("./pages/Services/SystemValidation"));
const S5 = lazy(() => import("./pages/Services/SafetyandRegulatory"));
const Admin = lazy(() => import("./pages/Admin"));
const EVGenericDeckBrief = lazy(() => import("./pages/Briefs/EVGenericDeckBrief"));
const EngineeringBrief = lazy(() => import("./pages/Briefs/EngineeringBrief"));
const PartnershipBrief = lazy(() => import("./pages/Briefs/PartnershipBrief"));

function AppContent() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  useEffect(() => {
    // Trigger loading on location change
    setIsLoading(true);

    // Simulate loading delay (or wait for resources if needed in future)
    // A small delay ensures the user sees the transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    // Reset modal state on navigation
    setIsPromoModalOpen(false);

    // 1. Auto-disappear after 10 July 2026
    const isExpired = new Date() > new Date("2026-07-11T00:00:00");
    if (isExpired) {
      return;
    }

    // 2. Permanent dismiss check
    const isDismissed = localStorage.getItem("tbs_promo_dismissed") === "true";
    if (isDismissed) {
      return;
    }

    // 3. Only fire on the home route
    if (location.pathname !== "/") {
      return;
    }

    const modalTimer = setTimeout(() => {
      setIsPromoModalOpen(true);
    }, 1500);

    return () => clearTimeout(modalTimer);
  }, [location]);

  const handleCloseModal = () => {
    setIsPromoModalOpen(false);
  };

  const handleDismissPermanently = () => {
    localStorage.setItem("tbs_promo_dismissed", "true");
    setIsPromoModalOpen(false);
  };

  return (
    <div className="app">
      <PageLoader isLoading={isLoading} />
      <NavBar />
      <main>
        <Suspense fallback={<PageLoader isLoading={true} />}>
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
            <Route path="/pages/Services/SystemEngineering" element={<S1 />} />
            <Route path="/pages/Services/SoftwareEngineering" element={<S2 />} />
            <Route path="/pages/Services/HardwareEngineering" element={<S3 />} />
            <Route path="/pages/Services/SystemValidation" element={<S4 />} />
            <Route path="/pages/Services/SafetyandRegulatory" element={<S5 />} />
            <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            <Route path="/briefs/ev-generic-deck" element={<EVGenericDeckBrief />} />
            <Route path="/briefs/engineering-reinforcement" element={<EngineeringBrief />} />
            <Route path="/briefs/partnership-brief" element={<PartnershipBrief />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />

      {/* Promotional Trade Show Modal */}
      {isPromoModalOpen && (
        <div className="promo-modal-overlay" onClick={handleCloseModal}>
          <div className="promo-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="promo-modal-close" onClick={handleCloseModal} aria-label="Close modal">&times;</button>
            <div className="promo-modal-header">
              <h2>Visit TBS at Vehicle Electrification Expo</h2>
              <span className="promo-modal-subhead">8-9 July 2026 &middot; NEC Birmingham &middot; Free to attend</span>
            </div>
            <div className="promo-modal-body">
              <p>Live HIL demo at the booth. Co-located with Battery Cells &amp; Systems Expo. Three technical briefs are available now covering the EV Generic Deck platform, our engineering capability, and the partnership model.</p>
            </div>
            <div className="promo-modal-actions">
              <Link 
                to="/briefs/ev-generic-deck" 
                className="promo-modal-btn primary"
                onClick={handleCloseModal}
              >
                Read the technical briefs
              </Link>
              <a 
                href="/briefs/TBS_Technical_Briefs.pdf" 
                download="TBS_Technical_Briefs.pdf" 
                className="promo-modal-btn secondary"
                onClick={handleCloseModal}
              >
                Download brief (PDF)
              </a>
            </div>
            <button className="promo-modal-dismiss" onClick={handleDismissPermanently}>
              Dismiss, don't show again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}


export default App;