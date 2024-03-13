import React, { useState, useEffect } from 'react';
import { Certificate } from '../../types';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CertificateRowProps {
  certificate: Certificate;
  toggleFavorite: (certificate: Certificate) => void;
  isFavorite: boolean;
}

const CertificateRow: React.FC<CertificateRowProps> = ({
  certificate,
  toggleFavorite,
  isFavorite,
}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(certificate.uniqueNumber);
    setTooltipVisible(true);
    setCopiedMessageVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
      setCopiedMessageVisible(false);
    }, 2000);
  };
  const handleFavoriteClick = () => {
    toggleFavorite(certificate);
  };

  return (
    <tr key={certificate.id} className="hover:bg-gray-200 border-gray-100 shadow-md ">
            <td 
        className="pr-16 pl-3 py-3 whitespace-nowrap text-md font-bold text-black"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        onClick={handleCopyToClipboard}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        {certificate.uniqueNumber.length > 20 ? `${certificate.uniqueNumber.slice(0, 25)}...` : certificate.uniqueNumber}
        {tooltipVisible && (
          <div 
            className="absolute bg-black text-white px-2 py-1 rounded border border-gray-400 font-light text-md"
            style={{ bottom: '-30px', left: '37%', transform: 'translateX(-50%)' }}
          >
            <span style={{ position: 'absolute', top: '-7px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '8px solid black' }}></span>
            Click to copy the certificate ID
          </div>
        )}
        {copiedMessageVisible && (
          <div className="absolute bg-gray-400 text-white px-2 py-1 rounded border border-gray-400 font-light text-md" style={{ top: '7px', left: '-80px', opacity: 1, transition: 'opacity 1s ease-out' }}>
            Copied
          </div>
        )}
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
