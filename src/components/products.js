import "../App.css";
import React, { Component } from "react";
import Product from "./product";

class Products extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="productList">
                {this.props.data.map((product, i) => {
                    return <Product el={product} key={i} />;
                })}
            </div>
        );
    }
}

export default Products;
