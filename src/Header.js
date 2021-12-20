import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

import wishList from './wishlist.png';
import account from './account.png';
import ShoppingBag from './shopping-basket.png';
import myntralogo from './myntra-logo.png'
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

   

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={myntralogo}
                    alt="p1" />
            </Link>

           
             <div >
    
        <Link className="links" to="/men">MEN</Link>
    
      <Link className="links" to="/women">WOMEN</Link>
    
    
      <Link className="links" to="/kids">KIDS</Link>
    
    
      <Link className="links" to="/home">HOME & LIVING</Link>
      
      <Link className="links" to="/offers">OFFERS</Link>
    
  </div>
  <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Search for Products, brands and more"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
        
  
                <div className="header__option">
                <img className="wishlist" src={account} alt="Logo" />

                 <span className="header__optionLineTwo">Profile</span>
                </div>


                <Link to="/checkout">
                <div className="header__option">
                <img className="wishlist" src={wishList} alt="Logo" />

                   
                    <span className="header__optionLineTwo header__basketCount">

                      {basket?.length}

                     </span>
                </div>
                </Link>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                    <img className="wishlist" src={ShoppingBag} alt="Logo" />
                 
                        <span className="header__optionLineTwo header__basketCount">

                           
                            
                        </span>
                       
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;