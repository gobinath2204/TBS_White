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
const EVGenericDeckBrief = lazy(() => import("./pages/Advert/EVGenericDeckBrief"));
const EngineeringBrief = lazy(() => import("./pages/Advert/EngineeringBrief"));
const PartnershipBrief = lazy(() => import("./pages/Advert/PartnershipBrief"));

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

    // Don't show the promo popup if the user is already reading one of the briefs
    const isBriefPage = location.pathname.startsWith("/advert/");
    if (isBriefPage) {
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
            <Route path="/advert/ev-generic-deck" element={<EVGenericDeckBrief />} />
            <Route path="/advert/engineering-reinforcement" element={<EngineeringBrief />} />
            <Route path="/advert/partnership-brief" element={<PartnershipBrief />} />
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
              <span className="promo-modal-badge">🎉 Trade Show Special</span>
              <h2>Test Base Solutions at the Trade Show!</h2>
            </div>
            <div className="promo-modal-body">
              <p>Come see our live HIL demonstration at the booth and get a physical copy of our technical briefs rollup banner.</p>
              <p className="promo-modal-subtext">You can also download the rollup briefs in PDF format directly, or read our online technical briefs to see how we integrate our platform and engineering scale.</p>
            </div>
            <div className="promo-modal-actions">
              <Link 
                to="/advert/ev-generic-deck" 
                className="promo-modal-btn primary"
                onClick={handleCloseModal}
              >
                Read Technical Briefs
              </Link>
              <a 
                href="/briefs/TBS_TradeShow_Rollups_v5.1.pdf" 
                download="TBS_TradeShow_Rollups_v5.1.pdf" 
                className="promo-modal-btn secondary"
                onClick={handleCloseModal}
              >
                Download PDF Rollup
              </a>
            </div>
            <button className="promo-modal-dismiss" onClick={handleCloseModal}>No thanks, dismiss</button>
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