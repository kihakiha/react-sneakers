import React from 'react';
import {Link} from "react-router-dom";
import {AppContext} from "../App";

const Header = (props) => {
    const {basketItems} = React.useContext(AppContext)
    const totalPrice = basketItems.reduce((sum, obj) => sum + obj.price, 0)
    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className="d-flex align-center m-0">
                    <img className='mr-15' width={40} height={40} src='/img/logo.png' alt='Logo'/>
                    <div>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <span className='opacity-5'>Магазин лучших кроссовок</span>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li className='mr-30 cu-p' onClick={props.onClickBasket}>
                    <img src="/img/basket.svg" alt="cart" className="mr-10"/>
                    <span>{totalPrice} руб.</span></li>
                <li>
                    <Link to='/favourites'>
                        <img src="/img/favourite.svg" alt="Favourite" className="cu-p mr-30"/>
                    </Link>
                    <Link to='/user'>
                        <img src='/img/profile.svg' alt="User" className='cu-p'/>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;