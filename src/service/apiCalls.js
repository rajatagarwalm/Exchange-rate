import axios from 'axios';

export const fetchExchangeRates = async () => {
    try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const { rates } = response.data;
        return rates;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
};

export const fetchExchangeRatesFromBaseCurrency = async (baseCurrency) => {
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const { rates } = response.data;
      return rates;
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      throw error;
    }
  };