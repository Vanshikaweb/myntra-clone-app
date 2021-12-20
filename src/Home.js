import React, { useState } from "react";
import "./Home.css";
import Menu from "./Filter";
import Product from "./Product";
import { Button } from "@material-ui/core";
import ShoppingBag from './shopping-basket.png';
import wishList from './wishlist.png';

const Home = () => {

    const [items, setItems] = useState(Menu);
    
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
  
    return (
        <>
            <h3 className="filter">Filter By Style</h3>
            <hr />
            
           <h2 className="vanshika">Vanshika's Myntra Clone</h2>
                
                    <button className="btn " onClick={() => setItems(Menu)}><h4>ALL</h4></button>
                   
                    <button className="btn " onClick={() => filterItem('dress')}><h4>DRESS</h4></button>
                    <button className="btn " onClick={() => filterItem('nightsuit')}><h4>NIGHTSUIT</h4></button>
                    <button className="btn " onClick={() => filterItem('kurta')}><h4>KURTA</h4></button>
                    <button className="btn " onClick={() => filterItem('saree')}><h4>SAREE</h4></button>
                    
            

          
                            {
                                items.map((elem) => {
                                    const { id, name, image, description, price } = elem;

                                    return (
                                   
                                        <div className="home__row">
                                      
                                                {/* for images */}
                                              <Product
                                              
                                              id={id}
                                              name={name}
                                              image={image}
                                              price={price}
                                              description={description}
                                                  />
                                                   
                                             </div>

                                                
                                     
                                        
                                      
                                    )
                                })
                        }

                             
                      
                
        </>
    )
}

export default Home