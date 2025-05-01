import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from './components/template/ThemeProvider';
import MenuBar from './components/shared/MenuBar';
import Home from './views/Home';
import ThemesPage from './views/Home/themes';
import './assets/styles/app.css';
import './assets/styles/themes.css';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-text flex flex-col transition-colors duration-300">
          <MenuBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/themes" element={<ThemesPage />} />
            </Routes>
          </main>
          <footer className="bg-surface py-6 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-text-light text-sm">
                © {new Date().getFullYear()} GoGetWell.ai - All rights reserved
              </p>
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;