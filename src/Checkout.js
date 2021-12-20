import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            

                <div>
                    <h3>Hello Customer,</h3>
                    <h2 className="checkout__title">Your Wishlist</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            price={item.price}
                            description={item.description}
                        />
                    ))}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;