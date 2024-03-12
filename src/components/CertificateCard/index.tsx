import React from 'react';
import { Certificate } from '../../types';
interface CertificateCardProps {
    certificate: Certificate;
    onFavoriteToggle: (id: string) => void;
  }
  
  const CertificateCard: React.FC<CertificateCardProps> = ({
    certificate,
    onFavoriteToggle,
  }) => {
    return (
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{certificate.unique_id}</h2>
          <button
            className="text-gray-500 hover:text-yellow-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
            </svg>
          </button>
        </div>
        <p>{`Originator: ${certificate.originator}, Originator Country: ${certificate.originator_country}`}</p>
        <p>{`Owner: ${certificate.owner}, Owner Country: ${certificate.owner_country}`}</p>
        <p>{`Status: ${certificate.status}`}</p>
        <button
          className="text-blue-500 hover:underline mt-2"
        >
          Click to copy the certificate ID
        </button>
      </div>
    );
  };
  
  export default CertificateCard;