import React, { Component } from "react";
import "./Navbar.css";
import { categories, currencies } from "../../query/query";
import { client } from "../../index";

class Navbar extends Component {
    state = {
        categ: [],
        cur: [],
    };
    componentDidMount = async () => {
        const categ = await client.query({
            query: categories,
        });
        const curren = await client.query({
            query: currencies,
        });
        this.setState({
            categ: categ.data.categories,
            cur: curren.data.currencies
        });
    };



    render() {
        return (<div className="header">
            <div className="navbar">
                <div className="logo">
                    <img src='/logo.svg' alt='img' />
                </div>
                <div className="actions">
                    <select>
                        {this.state.cur.map((el, i) => {
                            return <option key={i}>{el.symbol}</option>
                        })}
                    </select>
                    <div className="shopItem">
                        <img src="/img.png" alt="shop" />
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Navbar;
