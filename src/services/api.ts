export const fetchCertificates = async () => {
    try {
        const response = await fetch(
        'https://demo.api.agreena.com/api/public/carbon_registry/v1/certificates?includeMeta=true&page=1&limit=10',
        {
            headers: {
            'API-ACCESS-TOKEN': 'Commoditrader-React-FE-Farmer',
            },
        }
        );
        const data = await response.json();
        return data.result.data;
    } catch (error) {
        console.error('Error fetching certificates:', error);
        return [];
    }
};