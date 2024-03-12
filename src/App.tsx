import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CertificatesPage from './pages/CertificatesPage/index.tsx';
import FavoritesPage from './pages/FavoritesPage/index.tsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

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
