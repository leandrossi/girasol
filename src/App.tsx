import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import GamersLanding from './pages/GamersLanding';
import GamersLandingOptimized from './pages/gamers-landing-optimized';
import ResearchersLanding from './pages/ResearchersLanding';
import InvestorsLanding from './pages/InvestorsLanding';
import CareersLanding from './pages/CareersLanding';
import MainLanding from './pages/MainLanding';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainLanding />} />
            <Route path="/gamers" element={<GamersLanding />} />
            <Route path="/researchers" element={<ResearchersLanding />} />
            <Route path="/investors" element={<InvestorsLanding />} />
            <Route path="/careers" element={<CareersLanding />} />
            <Route path="/gamers2" element={<GamersLandingOptimized />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;