import React, { useEffect, useState } from 'react';
import { Certificate } from '../../types';
import CertificateCard from '../../components/CertificateCard';

const CertificatesPage: React.FC = () => {
    const [certificates, setCertificates] = useState<Certificate[]>([]);
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Certificates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
        </div>
      </div>
    );
  };
  
  export default CertificatesPage;