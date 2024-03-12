export interface Certificate {
    id: number;
    status: string;
    uniqueNumber: string;
    countryCode: string;
    companyName: string;
    carbonUser: {
        id: number;
        user: {
            id: number;
        };
        company: {
            id: number;
            name: string;
            address: {
                id: number;
                country: string;
            };
        };
    };
    carbonCertificateOwnerAccount: {
        id: number;
        carbonUser: {
            id: number;
            user: {
                id: number;
            };
            company: {
            id: number;
            name: string;
            address: {
                    id: number;
                    country: string;
                };
            };
        };
    };
}