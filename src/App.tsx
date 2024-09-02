import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import './AppMedia.css';
import './Gallery.css';
import './GalleryMedia.css';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Gallery from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import Pictures from './pages/Pictures';

// yarn dev
function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            {/* Omdirigera från root till /hem */}
            <Route path="/" element={<Navigate replace to="/hem" />} />
            <Route path="/hem" element={<HomePage />} />
            <Route path="/galleri" element={<Gallery />} />
            <Route path="/galleri/:albumPath" element={<Pictures />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;