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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
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
          <Route path="iletisim" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
