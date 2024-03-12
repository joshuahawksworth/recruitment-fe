import React, { useEffect, useState } from 'react';
import { Certificate } from '../../types';
import CertificateCard from '../../components/CertificateCard/index.tsx';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((certificate) => (
            <CertificateCard
                key={certificate.id}
                certificate={certificate}
                onFavoriteToggle={handleFavoriteToggle}
            />
            ))}
        </div>
      </div>
    );
  };
  
  export default CertificatesPage;