/* eslint-disable no-unused-vars */
import React from "react";
import "./Product.css";

import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import wishList from './wishlist.png';

function Product({ id, name, image, price, description }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                image: image,
                price: price,
                description: description,
            },
        });
    };

    return (
        <div className="product">
        
            <img className="img-product" src={image} alt="" />
           
          
            <div className="product__info">
                <p>{name}</p>
                <p className="product__price">
                   
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(description)
                        .fill()
                        .map((_, i) => (
                            <p>{description}</p>
                        ))}
                </div>
                
           
             
            <button  onClick={addToBasket}><h4>Add to Wishlist    </h4></button>
            </div>

        </div>
    );
}

export default Product;