import React from 'react';
import "./ProductCard.css";
import { useQuery } from "@apollo/client";
import { categories } from "../../query/query";


export default function ProductCard() {
    const { data: categ, loading, error } = useQuery(categories);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <div className='inner'>
            {categ.categories.map((el) => {
                return el.products.map((el, i) => {
                    return <div key={i} className='product'>
                        <img key={i} className='productPicture' src={el.gallery[0]} alt='img' />
                        <h2>{el.name}</h2>
                    </div>
                })
            })}
        </div>
    );
}