import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchExchangeRatesFromBaseCurrency } from '../service/apiCalls';
import './ExchangeRate.css';

const ExchangeRate = () => {
    const [baseCurrency, setBaseCurrency] = useState('USD');
    const [exchangeRate, setExchangeRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoading(true);
                const rates = await fetchExchangeRatesFromBaseCurrency(baseCurrency);
                setExchangeRate(rates);
                setLoading(false);
            } catch (error) {
                setError('Error fetching exchange rates. Please try again later.');
                setLoading(false);
            }
        };

        fetchRates();
    }, [baseCurrency]);

    const handleBaseCurrencyChange = (event) => {
        setBaseCurrency(event.target.value);
    };

    return (
        <div className='container'>
            <div className='content'>
                <h2>Current Exchange Rates</h2>
                <div className="currency-select">
                    <label htmlFor="baseCurrency">Base Currency:</label>
                    <select id="baseCurrency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
                        {exchangeRate &&
                            Object.keys(exchangeRate).map((currency) => (
                                <option key={currency} value={currency}>
                                    {currency}
                                </option>
                            ))}
                    </select>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Currency</th>
                                <th>Exchange Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exchangeRate &&
                                Object.keys(exchangeRate).map((currency) => (
                                    <tr key={currency}>
                                        <td>{currency}</td>
                                        <td>{exchangeRate[currency]}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ExchangeRate;
