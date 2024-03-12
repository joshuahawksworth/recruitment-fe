import React from 'react';
import { Certificate } from '../../types';

interface CertificateRowProps {
  certificate: Certificate;
  onFavoriteToggle: (id: string) => void;
}

const CertificateRow: React.FC<CertificateRowProps> = ({ certificate, onFavoriteToggle }) => {
    
  const handleFavoriteClick = () => {
    onFavoriteToggle(certificate.id.toString());
  };

  return (
    <tr key={certificate.id} className="hover:bg-gray-100 shadow-md">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {certificate.uniqueNumber.length > 20 ? `${certificate.uniqueNumber.slice(0, 20)}...` : certificate.uniqueNumber}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {certificate.companyName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {certificate.countryCode}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {certificate.carbonCertificateOwnerAccount.carbonUser.company.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {certificate.carbonCertificateOwnerAccount.carbonUser.company.address.country}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {certificate.status}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        <button onClick={handleFavoriteClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Favorites
        </button>
      </td>
    </tr>
  );
};

export default CertificateRow;
