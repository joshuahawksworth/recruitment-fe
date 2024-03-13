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
    <div className="flex">
      {certificates.length === 0 ? (
        <p className="text-center text-gray-500 font-semibold">No certificates found.</p>
      ) : (
        <table className="w-full max-w-screen-lg min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                UNIQUE ID
              </th>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                ORIGINATOR
              </th>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                ORIGINATOR COUNTRY
              </th>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                OWNER
              </th>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                OWNER COUNTRY
              </th>
              <th scope="col" className="pr-16 pl-2 py-1 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-8">
            {certificates.map((certificate) => (
              <CertificateRow
                key={certificate.id}
                onFavoriteToggle={onFavoriteToggle}
                certificate={certificate}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CertificateTable;
