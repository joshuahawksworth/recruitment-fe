import React from 'react';
import { Certificate } from '../../types';

interface CertificateRowProps {
    certificate: Certificate;
}

const CertificateRow: React.FC<CertificateRowProps> = ({ certificate }) => {
    return (
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
    );
};

export default CertificateRow;
