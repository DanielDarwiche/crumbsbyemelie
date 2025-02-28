import './App.css';
import './Gallery.css';

import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Pictures from './pages/Pictures';

import profilbild from './photos/profil.jpg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <div className="startdiv">
                <div className='headpicture'>
                  <img src={profilbild} id='profilbild'/>
                </div>
                <div className='picture-side-text'>
                  <h1>Välkommen till Crumbs by Emelie!</h1>
                  <p>Nedan kan du se tidigare bakverk och beställningar.<br />
                  Kontakt sker via <a href="https://www.instagram.com/crumbsbyemelie/">Instagram.</a></p>
                </div>
              </div>
              <Gallery />
            </>
          } />
          <Route path="/galleri/:albumPath" element={<Pictures />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;