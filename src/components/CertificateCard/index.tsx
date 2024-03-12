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
    <div>
      
    </div>
  );
};

export default CertificateCard;
