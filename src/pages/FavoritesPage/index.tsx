import React from 'react';
import { Certificate } from '../../types';
import CertificateTable from '../../components/CertificateTable/index.tsx';
import { handleFavoriteToggle } from '../../helpers/handleFavoriteToggle.tsx';

const FavoritesPage: React.FC = () => {
    const favorites: Certificate[] = [];
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Favorites</h1>
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