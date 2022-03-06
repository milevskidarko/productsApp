import "../App.css";
import { categories } from "../query/query";
import React, { Component } from "react";
import { client } from "../index";
import Product from './product'


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
        };
    }
    componentDidMount = async () => {
        const allCategory = await client.query({
            query: categories,
        });
        this.setState({
            allCategories: allCategory.data.categories,
        });
    };

    render() {
        return (
            <div className="inner">
                {this.state.allCategories.map((product) => {
                    return product.products.map((el, i) => {
                        return <Product el={el} key={i} />
                    });
                })}
            </div>
        );
    }
}

export default Products;
