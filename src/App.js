import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/Product/Product";
import { categories } from "./query/query";
import { client } from "./index";

class App extends Component {
  state = {
    categ: [],
    filterArr: [],
  };
  componentDidMount = async () => {
    const categ = await client.query({
      query: categories,
    });
    this.setState({
      categ: categ.data.categories,
    });
  };

  handleClick = (event) => {
    console.log(event.target.value, "event");
    const byOrigin = event.target.value;
    let filterArr = [];
    if (event.target.value === "all") {
      filterArr = this.state.categ;
    } else {
      filterArr = this.state.categ.filter((el) => el.origin === byOrigin);
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
          {this.state.categ.map((el, i) => {
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
          categ={this.state.categ}
        />
      </div>
    );
  }
}

export default App;
