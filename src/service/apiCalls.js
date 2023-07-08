import axios from 'axios';

export const fetchCurrencyOptions = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const currencyOptions = Object.keys(response.data.rates);
        return currencyOptions;
    } catch (error) {
        console.error('Error fetching currency options:', error);
        return [];
    }
};
