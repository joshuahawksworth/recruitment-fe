import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Certificate } from '../../types';
import CertificateTable from '../../components/CertificateTable/index.tsx';
import { handleFavoriteToggle } from '../../helpers/handleFavoriteToggle.tsx';
import { fetchCertificates } from '../../services/api.ts';

const CertificatesPage: React.FC = () => {
    const [certificates, setCertificates] = useState<Certificate[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCertificates();
            setCertificates(data);
        };
        fetchData();
    }, []);

    return (
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Certificates</h1>
          <Link to="/favorites" className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Favorites ⭐
          </Link>
        </div>
        <div className="flex justify-center">
            <CertificateTable
                certificates={certificates}
                onFavoriteToggle={handleFavoriteToggle}
            />
        </div>
      </div>
    );
  };
  
  export default CertificatesPage;
