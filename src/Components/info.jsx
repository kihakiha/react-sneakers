import React from 'react';
import {AppContext} from "../App";

const Info = ({image, title, description }) => {

    const {setBasketOpen} = React.useContext(AppContext)

    return (
        <div>
            <div className="basketEmpty d-flex justify-center align-center flex-column flex">
                <img className='mb-20' width={120}  src={image} alt="Empty Basket"/>
                <h2>{title}</h2>
                <p className='text-center opacity-6'>{description}</p>
                <button onClick={() => setBasketOpen(false)} className='confirmBtn'>
                    <img src='img/leftArrow.svg' alt='left'/>
                    Вернуться назад
                </button>
            </div>
        </div>
    );
};

export default Info;