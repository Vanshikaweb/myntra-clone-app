import React from "react";
import "./CheckoutProduct.css";
import { Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, name, price, description, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="product" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(description)
            .fill()
            .map((_, i) => (
              <p>{description}</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>REMOVE FROM WISHLIST</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
