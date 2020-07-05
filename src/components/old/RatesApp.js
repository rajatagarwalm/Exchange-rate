import React from "react";
import { FetchProfile } from "../ApiCall";
import RequestExchangeRate from "../RequestExchangeRate";
import ConvertExchangeRates from "../ConvertExchangeRates";

class ExchangeRatesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      value: "GBP"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    FetchProfile().then(data =>
      this.setState({
        isLoaded: true,
        items: data
      })
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const base = this.state.value;
    // console.log(typeof base);
    const basicUrl = "https://api.exchangeratesapi.io/latest?";
    if (base === "EUR") {
      return fetch(basicUrl)
        .then(res => res.json())
        .then(
          data =>
            this.setState({
              items: data,
              value: base
            })
          // if (ratesKeys) {
          // ratesKeys.push('EUR')
          // } // condition to check if EUR present, if not array.push it to array
        );
    } else {
      return fetch(basicUrl + "base=" + base)
        .then(res => res.json())
        .then(data =>
          this.setState({
            items: data,
            value: base
          })
        );
    }
  };
  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    // console.log(this.state.value);
  };

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded || !items.rates) {
      return <div>Loading...</div>;
    }

    let ratesKeys = Object.keys(items.rates).map(rates => {
      return {
        value: rates,
        display: rates
      };
    });
    // console.log(ratesKeys);
    // console.log(this.state.items.base);

    return (
      <div>
        {/* <hr />
        <p className="titleStyles">Request Exchange Rate</p>
        <hr />
        <p>Please Select Base Rate: </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.value} onChange={this.handleChange}>
              {ratesKeys.map(rates => (
                <option key={rates.value} value={rates.value}>
                  {rates.display} */}
        {/* <option>EUR</option> */}
        {/* </option>
              ))}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form> */}
        {/* <p> One {this.state.value} is equal to: </p> */}
        {/* <ul>
          {Object.keys(items.rates).map((key, index) => (
            <li key={index}>
              {key}: {Number(items.rates[key]).toFixed(4)}
            </li>
          ))}
        </ul> */}
        <RequestExchangeRate
          items={this.state.items}
          base={this.state.items.base}
          rates={this.state.items.rates}
          value={this.state.value}
          ratesArray={ratesKeys}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {/* <ConvertExchangeRates
          items={this.state.items}
          base={this.state.items.base}
          rates={this.state.items.rates}
          value={this.state.value}
        /> */}
      </div>
    );
  }
}

export default ExchangeRatesApp;
