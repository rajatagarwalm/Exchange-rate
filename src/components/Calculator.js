import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Calculator.css'; // Import the CSS file

const Calculator = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [exchangeRates, setExchangeRates] = useState({});

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
                const { rates } = response.data;
                setExchangeRates(rates);
                const options = Object.keys(rates);
                setCurrencyOptions(options);
                setFromCurrency(options[0]);
                setToCurrency(options[1]);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchExchangeRates();
    }, []);

    const handleAmountChange = (e) => {
        const inputAmount = e.target.value;
        if (inputAmount < 0) {
            return;
        }
        setAmount(inputAmount);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const handleConvert = (e) => {
        e.preventDefault();
        const convertedAmountValue = (amount * exchangeRates[toCurrency]) / exchangeRates[fromCurrency];
        setConvertedAmount(convertedAmountValue.toFixed(2));
    };

    return (
        <div className="calculator-container"> {/* Apply a container class */}
            <h2>Exchange Rate Calculator</h2>
            <form onSubmit={handleConvert}>
                <div className="form-row"> {/* Apply a class to the form row */}
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
                </div>
                <div className="form-row"> {/* Apply a class to the form row */}
                    <label htmlFor="from-currency">From Currency:</label>
                    <select id="from-currency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-row"> {/* Apply a class to the form row */}
                    <label htmlFor="to-currency">To Currency:</label>
                    <select id="to-currency" value={toCurrency} onChange={handleToCurrencyChange}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Convert</button>
            </form>
            {convertedAmount && <div className="converted-amount">
                {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </div>}
        </div>
    );
};

export default Calculator;
