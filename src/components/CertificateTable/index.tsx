import React from 'react';
import { Certificate } from '../../types';
import CertificateRow from '../CertificateRow/index.tsx';

interface CertificateTableProps {
  certificates: Certificate[];
  onFavoriteToggle: (id: string) => void;
}

const CertificateTable: React.FC<CertificateTableProps> = ({
  certificates,
  onFavoriteToggle,
}) => {

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              UNIQUE ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              ORIGINATOR
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              ORIGINATOR COUNTRY
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              OWNER
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              OWNER COUNTRY
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"> {/* Adjusted className */}
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {certificates.map((certificate) => (
            <CertificateRow 
              key={certificate.id}
              onFavoriteToggle={onFavoriteToggle}
              certificate={certificate} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTable;
