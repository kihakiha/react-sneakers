import React from 'react';
import Card from "../Components/Card";
import {AppContext} from "../App";

function Favourites() {
    const {favourites, onAddFavourite, onAddBasket} = React.useContext(AppContext);
    return (
        <section className="content p-40">
            <div className='mb-30 d-flex justify-between align-center'>
                <h1>Мои закладки</h1>
            </div>
            <div className="catalog d-flex justify-around flex-wrap">
                {favourites
                    .map((item, itemIndex) => (
                        <Card
                            key={itemIndex}
                            onClickAddBasket={(obj) => onAddBasket(obj)}
                            onClickFavourite={(obj) => onAddFavourite(obj)}
                            Favourite = {true}
                            {...item}

                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Favourites;