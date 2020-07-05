import React from "react";

class ConvertExchangeRates extends React.Component {
  /* Function for Dropdown */
  displayDropDown = () => {
    return this.props.newRatesArray.map((rates) => (
      <option key={rates.value} value={rates.value}>
        {rates.display}{" "}
      </option>
    ));
  };

  render() {
    return (
      <div>
        <hr />
        <p className="titleStyles">Convert Exchange Rate</p>
        <hr />
        <p>1. Enter amount</p>
        <p>2. Choose start/end currencies</p>
        <p>
          3. Click{" "}
          <span style={{ color: "red", textDecoration: "underline" }}>
            CONVERT
          </span>{" "}
          for result
        </p>
        <form onSubmit={this.props.handleConversion}>
          <div>
            <label>Amount: </label>
            <input
              type="number"
              id="amount"
              placeholder="1"
              step="0.01"
              value={this.props.amount}
              onChange={this.props.handleAmountChange}
            />
          </div>
          <div>
            <label className="formLabel">from: </label>
            <select
              name="start"
              value={this.props.startcurrency}
              onChange={this.props.handleFromDropdown}
            >
              {/* Dropdown 1 */}
              {this.displayDropDown()}
            </select>
          </div>
          <div>
            <label className="formLabel">to: </label>
            <select
              name="end"
              value={this.props.endcurrency}
              onChange={this.props.handleFromDropdown}
            >
              {/* Dropdown 2 */}
              {this.displayDropDown()}
            </select>
          </div>
          <input className="convertButton" type="submit" value="Convert" />
          <p className="convertResult">
            {this.props.amount} {this.props.startcurrency} is equal to{" "}
            {this.props.result ? this.props.result : this.props.defValue}{" "}
            {this.props.endcurrency}
          </p>
        </form>
      </div>
    );
  }
}

export default ConvertExchangeRates;
