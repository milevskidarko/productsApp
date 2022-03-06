import "../App.css";
import { categories } from "../query/query";
import React, { Component } from "react";
import { client } from "../index";

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
                        return (
                            <div key={i} className="product">
                                <img
                                    key={i}
                                    className="productPicture"
                                    src={el.gallery[0]}
                                    alt="img"
                                />
                                <h2>{el.name}</h2>
                            </div>
                        );
                    });
                })}
            </div>
        );
    }
}

export default Products;
