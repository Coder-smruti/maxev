import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import DC60 from './pages/DC60';
import Compatibility from './pages/Compatibility';
import Network from './pages/Network';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dc60" element={<DC60 />} />
          <Route path="/compatibility" element={<Compatibility />} />
          <Route path="/network" element={<Network />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-center px-4 pt-20">
              <div>
                <div className="font-display font-black text-8xl text-gray-100 mb-4">404</div>
                <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">Page Not Found</h1>
                <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-secondary">Back to Home</a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
