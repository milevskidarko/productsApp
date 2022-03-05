import React from "react";
import "./Navbar.css";
import { useQuery } from "@apollo/client";
import { categories, currencies } from "../../query/query";

export default function Navbar() {
    const { data: categ, loading, error } = useQuery(categories);
    const { data: cur } = useQuery(currencies);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className="header">
            <div className="navbar">
                <div className="navigation">
                    {categ.categories.map((el, i) => {
                        return <div key={i} className="catItems">{el.name}</div>;
                    })}
                </div>
                <div className="logo">
                    <img src='/logo.svg' alt='img' />
                </div>
                <div className="actions">
                    <select>
                        {cur && cur.currencies.map((el, i) => {
                            return <option key={i}>{el.symbol}</option>
                        })}
                    </select>
                    <div className="shopItem">
                        <img src="/img.png" alt="shop"  />
                    </div>
                </div>
            </div>
        </div>
    );
}
