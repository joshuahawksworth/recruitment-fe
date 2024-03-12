import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificatesPage from './pages/CertificatesPage/index.tsx';
import FavoritesPage from './pages/FavoritesPage/index.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CertificatesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
