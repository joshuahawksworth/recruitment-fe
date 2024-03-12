import React, { useState } from 'react';
import { Certificate } from '../../types';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CertificateRowProps {
  certificate: Certificate;
  onFavoriteToggle: (id: string) => void;
}

const CertificateRow: React.FC<CertificateRowProps> = ({ certificate, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(certificate.id.toString());
  };

  return (
    <tr key={certificate.id} className="hover:bg-gray-200 border-gray-100 shadow-md ">
      <td className="pr-16 pl-3 py-3 whitespace-nowrap text-md font-bold text-black">
        {certificate.uniqueNumber.length > 20 ? `${certificate.uniqueNumber.slice(0, 25)}...` : certificate.uniqueNumber}
      </td>
      <td className="pr-16 pl-2 py-3 whitespace-nowrap text-md font-bold text-black">
        {certificate.companyName}
      </td>
      <td className="pr-16 pl-2 py-3 whitespace-nowrap text-md font-bold text-black">
        {certificate.countryCode}
      </td>
      <td className="pr-16 pl-2 py-3 whitespace-nowrap text-md font-bold text-black">
        {certificate.carbonCertificateOwnerAccount.carbonUser.company.name}
      </td>
      <td className="pr-16 pl-2 py-3 whitespace-nowrap text-md font-bold text-black">
        {certificate.carbonCertificateOwnerAccount.carbonUser.company.address.country}
      </td>
      <td className="pr-16 pl-2 py-3 whitespace-nowrap text-md font-bold text-black">
        {capitalizeFirstLetter(certificate.status)}
      </td>
      <td className="pr-3 py-2 whitespace-nowrap text-sm font-bold text-black">
        <button onClick={handleFavoriteClick} className="bg-transparent border-none">
          <FontAwesomeIcon 
            icon={isFavorite ? ['fas', 'bookmark'] : ['far', 'bookmark']} 
            style={isFavorite ? { color: "gold" } : {}}
            size={'lg'}
          />
        </button>
      </td>
    </tr>
  );
};

export default CertificateRow;
