import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AppStateProvider } from './context/AppStateContext';
import Header from './components/Header';
import SharedStateLoader from './components/SharedStateLoader';
import Home from './pages/Home';
import Mode1 from './pages/Mode1';
import Mode2 from './pages/Mode2';
import './i18n';

function App() {
  return (
    <ThemeProvider>
      <AppStateProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <SharedStateLoader />
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mode1" element={<Mode1 />} />
                <Route path="/mode2" element={<Mode2 />} />
              </Routes>
            </main>
            <footer className="border-t border-gray-200 dark:border-gray-700 py-3 px-4 text-center text-sm text-gray-600 dark:text-gray-300">
              <a
                href="https://litt.ly/chichiboo"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Created by. 교육뮤지컬 꿈꾸는 치수쌤
              </a>
            </footer>
          </div>
        </BrowserRouter>
      </AppStateProvider>
    </ThemeProvider>
  );
}

export default App;
