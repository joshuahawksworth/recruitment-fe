import React from 'react';
import { Certificate } from '../../types';
import CertificateRow from '../CertificateRow';

interface CertificateTableProps {
    certificates: Certificate[];
    onFavoriteToggle: (id: string) => void;
  }
  
const CertificateTable: React.FC<CertificateTableProps> = ({
    certificates,
    onFavoriteToggle,
  }) => {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              UNIQUE ID
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ORIGINATOR
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ORIGINATOR COUNTRY
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              OWNER
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              OWNER COUNTRY
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {certificates.map((certificate) => (
                <CertificateRow key={certificate.id} certificate={certificate} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTable;
