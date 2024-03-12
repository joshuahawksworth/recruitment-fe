import React from 'react';
import { Certificate } from '../../types';

interface CertificateTableProps {
    certificate: Certificate[];
    onFavoriteToggle: (id: string) => void;
  }
  
const CertificateTable: React.FC<CertificateTableProps> = ({
    certificate,
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
          {certificate.map((certificate) => (
            <tr key={certificate.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {certificate.uniqueNumber}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CertificateTable;
