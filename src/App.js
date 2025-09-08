import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BreakfastPage from './pages/BreakfastPage';
import DrinksPage from './pages/DrinksPage';
import DessertPage from './pages/DessertPage';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/breakfast" element={<BreakfastPage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/dessert" element={<DessertPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;