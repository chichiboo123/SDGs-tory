import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppStateProvider } from './context/AppStateContext';
import Header from './components/Header';
import Home from './pages/Home';
import Mode1 from './pages/Mode1';
import Mode2 from './pages/Mode2';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <AppStateProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mode1" element={<Mode1 />} />
              <Route path="/mode2" element={<Mode2 />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppStateProvider>
    </ThemeProvider>
  );
}

export default App;
