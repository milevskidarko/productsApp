import React, { Component } from "react";
import "../App.css";
import { categories, currencies } from "../query/query";
import { client } from "../index";

class Navbar extends Component {
  state = {
    allCategories: [],
    allCurrencies: [],
  };
  componentDidMount = async () => {
    const allCategory = await client.query({
      query: categories,
    });
    const AllCurrency = await client.query({
      query: currencies,
    });
    this.setState({
      allCategories: allCategory.data.categories,
      allCurrencies: AllCurrency.data.currencies,
    });
  };

  render() {
    return (
      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img src="/logo.svg" alt="img" />
          </div>
          <div className="actions">
            <select>
              {this.state.allCurrencies.map((el, i) => {
                return <option key={i}>{el.symbol}</option>;
              })}
            </select>
            <div className="shoppingItem">
              <img src="/img.png" alt="shop" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
