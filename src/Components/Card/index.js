import React from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader";
import {AppContext} from "../../App";



const Card = ({
                  id,
                  onClickAddBasket,
                  price,
                  title,
                  imageUrl,
                  onClickFavourite,
                  Favourite,
                  added = false,
                  loading = false
              }) => {
    const {isItemAdded} = React.useContext(AppContext)
    const [isFavourite, setIsFavourite] = React.useState(Favourite);
    const obj = {id, parentId: id, title, imageUrl, price}
    const handlePlus = () => {
        onClickAddBasket(obj)
    }
    const handleFavourite = () => {
        onClickFavourite(obj)
        setIsFavourite(!isFavourite)
    }
    return (
        <div className={styles.card}>
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={150}
                        height={240}
                        viewBox="0 0 150 265"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="130"/>
                        <rect x="0" y="150" rx="10" ry="10" width="150" height="15"/>
                        <rect x="0" y="174" rx="10" ry="10" width="100" height="15"/>
                        <rect x="0" y="210" rx="10" ry="10" width="80" height="24"/>
                        <rect x="118" y="205" rx="10" ry="10" width="32" height="32"/>
                    </ContentLoader>
                    :
                    <>
                        <div onClick={handleFavourite} className={styles.favourite}>
                            <img src={isFavourite ? '/img/favouriteSelected.svg' : '/img/favouriteNone.svg'}
                                 alt="favouriteNone"/>
                        </div>
                        <div className="d-flex align-center justify-center">
                            <img width={133} height={112} src={imageUrl} alt="Sneakers"/>
                        </div>
                        <h5>{title}</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>{price} руб.</b>
                            </div>
                            {onClickAddBasket && <img
                                className={styles.plus}
                                onClick={handlePlus}
                                src={
                                    isItemAdded(id) ? '/img/inBasket.svg' : '/img/notInBasket.png'
                                }
                                alt="Add"
                            />}
                        </div>
                    </>
            }

        </div>
    );
};

export default Card;