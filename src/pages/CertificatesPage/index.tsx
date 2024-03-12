import React, { useEffect, useState } from 'react';
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
        <h1 className="text-2xl font-bold mb-4">Certificates</h1>
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