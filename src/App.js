import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import ProductCard from "./components/products";
import { categories } from "./query/query";
import { client } from "./index";

class App extends Component {
  state = {
    allCategories: [],
    filterArr: [],
  };
  componentDidMount = async () => {
    const allCategory = await client.query({
      query: categories,
    });
    this.setState({
      allCategories: allCategory.data.categories,
    });
  };

  handleClick = (event) => {
    console.log(event.target.value, "event");
    const byOrigin = event.target.value;
    let filterArr = [];
    if (event.target.value === "all") {
      filterArr = this.state.allCategories;
    } else {
      filterArr = this.state.allCategories.filter((el) => el.origin === byOrigin);
    }
    this.setState({ filterArr: filterArr });
    console.log(byOrigin, "filter");
    console.log(filterArr, 'filterArr')
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="navigation">
          {this.state.allCategories.map((el, i) => {
            return (
              <button
                key={i}
                className="catItems"
                onClick={this.handleClick}
                value={el.name}
              >
                {el.name}
              </button>
            );
          })}
        </div>
        <p className="title">Category Name</p>
        <ProductCard
          categ={this.state.allCategories}
        />
      </div>
    );
  }
}

export default App;
