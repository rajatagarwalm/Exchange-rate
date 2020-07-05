import React from "react";

class RequestExchangeRate extends React.Component {
  state = {};

  removeRateIfBase = (key, index) => {
    if (key !== this.props.base) {
      return (
        <li key={index}>
          {key +
            ":" +
            " " +
            parseFloat(Number(this.props.rates[key]).toFixed(5))}
        </li>
      );
    }
  };

  addEURToDropDownIfAbsent = () => {
    if (this.props.base === "EUR") {
      let currencyAr = { value: "EUR", display: "EUR" };
      let newRatesArrayAndEUR = this.props.newRatesArray.concat(currencyAr);
      return newRatesArrayAndEUR.sort().map((rates) => (
        <option key={rates.value} value={rates.value}>
          {rates.display}
        </option>
      ));
    } else {
      return this.props.newRatesArray.map((rates) => (
        <option key={rates.value} value={rates.value}>
          {rates.display}
        </option>
      ));
    }
  };

  render() {
    return (
      <div>
        <hr />
        <p className="titleStyles">Request Exchange Rate</p>
        <hr />
        <p>1. Select Base Rate</p>
        <p>
          2. Click{" "}
          <span style={{ color: "red", textDecoration: "underline" }}>
            SUBMIT
          </span>{" "}
          for the base rate to change
        </p>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            <select value={this.props.value} onChange={this.props.handleChange}>
              {/* populates the dropdown with the country codes */}
              {this.addEURToDropDownIfAbsent()}
            </select>
          </label>
          <input type="submit" value="submit" />
        </form>
        <p> 1 {this.props.value} is equal to: </p>
        <ul>
          {Object.keys(this.props.rates)
            .sort()
            .map((key, index) => this.removeRateIfBase(key, index))}
        </ul>
      </div>
    );
  }
}

export default RequestExchangeRate;
