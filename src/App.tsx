import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificatesPage from './pages/CertificatesPage/index.tsx';
import FavoritesPage from './pages/FavoritesPage/index.tsx';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<CertificatesPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;
