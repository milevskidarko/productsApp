import React, { Component } from "react";
import "../App.css";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCategories: [],
        };
    }

    componentDidMount = async () => {
        this.setState({
            allCategories: this.props,
        });
    };

    render() {
        return (
            <div className="product" key={this.props.i}>
                <img className="productPicture" src={this.props.el.gallery[0]} alt="img" />
                <h2>{this.props.el.name}</h2>
            </div>
        );
    }
}

export default Product;
