import React from 'react';
import { Certificate } from '../../types';
import CertificateTable from '../../components/CertificateTable/index.tsx';
import { handleFavoriteToggle } from '../../helpers/handleFavoriteToggle.tsx';
import { Link } from 'react-router-dom';

const FavoritesPage: React.FC = () => {
    const favorites: Certificate[] = [];
    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">Favorites</h1>
          <Link to="/" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
            Certificates 📄
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <CertificateTable
                certificates={favorites}
                onFavoriteToggle={handleFavoriteToggle}
            />
        </div>
      </div>
    );
  };
  
  export default FavoritesPage;