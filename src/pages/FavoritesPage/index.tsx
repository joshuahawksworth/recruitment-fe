import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Certificate } from '../../types';
import CertificateTable from '../../components/CertificateTable/index.tsx';

const FavoritesPage: React.FC = () => {
    const [favorites, setFavorites] = useState<Certificate[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(storedFavorites);
    }, []);

    const toggleFavorite = (certificate: Certificate) => {
        const isFavorite = favorites.some(fav => fav.id === certificate.id);
        if (isFavorite) {
            const updatedFavorites = favorites.filter(fav => fav.id !== certificate.id);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
            const updatedFavorites = [...favorites, certificate];
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        }
    };

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
                toggleFavorite={toggleFavorite}
                favorites={favorites}
            />
        </div>
      </div>
    );
};

export default FavoritesPage;
