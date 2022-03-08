import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Products from "./components/products";
import { categories } from "./query/query";
import { client } from "./index";

class App extends Component {
  state = {
    categories: [],
    filtered: [],
  };
  componentDidMount = async () => {
    const allCategory = await client.query({
      query: categories,
    });
    let flatListOfCategories = [];
    allCategory.data.categories.map(category => {
      if (category.name === "all") {
        flatListOfCategories = category.products
      }
      return true
    })
    this.setState({
      filtered: flatListOfCategories,
      ...allCategory.data
    })
  };

  handleClick = (name) => {
    let filtered = [];
    this.state.categories.map(category => {
      if (category.name === name) {
        filtered = category.products;
        return true;
      }
      return false;
    })
    this.setState({
      ...this.state,
      filtered: filtered,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="categories">
          <ul>
            {this.state.categories.map((el, i) => {
              return (
                <li
                  key={i}
                  className="categoriesName"
                  onClick={() => { this.handleClick(el.name) }}
                >
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
        <p className="title">Category Name</p>
        <Products data={this.state.filtered} />
      </div>
    );
  }
}

export default App;
