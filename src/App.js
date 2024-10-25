// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Privacy from './pages/Privacy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the landing page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Route for the privacy page */}
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;