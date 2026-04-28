import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Reports from './pages/Reports';
import Certificates from './pages/Certificates';
import Training from './pages/Training';
import Contact from './pages/Contact';
import GrievancePolicy from './pages/GrievancePolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="hakkimizda" element={<About />} />
            <Route path="hizmetlerimiz" element={<Services />} />
            <Route path="projelerimiz" element={<Projects />} />
            <Route path="raporlama" element={<Reports />} />
            <Route path="sertifikalar" element={<Certificates />} />
            <Route path="egitim" element={<Training />} />
            <Route path="sikayet-politikasi" element={<GrievancePolicy />} />
            <Route path="gizlilik-politikasi" element={<PrivacyPolicy />} />
            <Route path="iletisim" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
