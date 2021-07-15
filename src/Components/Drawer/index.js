import React from 'react';
import axios from "axios";

import Info from "../info";
import {AppContext} from "../../App";

import styles from './Drawer.module.scss'

const delay = (time) => new Promise((resolve) => setTimeout(resolve,time))

const Drawer = ({onCloseCart, onRemove, items = [], opened}) => {

    const {basketItems, setBasketItems} = React.useContext(AppContext)
    const [orderId, setOrderId] = React.useState(null)
    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [isLoadingOrder, setIsLoadingOrder] = React.useState(false)

    const totalPrice = basketItems.reduce((sum, obj) => sum + obj.price, 0)
    const NDS = Math.floor(totalPrice - 0.8*totalPrice)
    const onClickOrder = async () => {
        try {
            setIsLoadingOrder(true)
            const { data } = await axios.post('https://60ec458ae9647b0017cde13f.mockapi.io/orders', {
                items: basketItems
            })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setBasketItems([])
            for (let i = 0; i < basketItems.length; i++) {
                const item = basketItems[i]
                await axios.delete('https://60ec458ae9647b0017cde13f.mockapi.io/cart/' + item.id)
                await delay(1000)
            }
        } catch (e){
            alert(e)
        }
        setIsLoadingOrder(false)
    }

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : '' }`}>
            <div className={`${styles.drawer} d-flex flex flex-column p-30`}>
                <h2 className='mb-30 d-flex justify-between'>
                    Корзина
                    <img
                        onClick={onCloseCart}
                        className='btnRemove cu-p'
                        src="/img/btnRemove.svg"
                        alt="Remove"
                    />
                </h2>

                {
                    items.length > 0 ?
                        <div className=' d-flex flex-column flex'>
                            <div className="items flex">
                                {
                                    items.map((obj) => (
                                        <div key={obj.id} className="basketItem mb-20 d-flex align-center">
                                            <div
                                                style={{backgroundImage: `url(${obj.imageUrl})`}}
                                                className="basketItemImg"
                                            />
                                            <div className='mr-20 flex'>
                                                <p className='mb-5'>{obj.title}</p>
                                                <b>{obj.price} руб.</b>
                                            </div>
                                            <img onClick={() => onRemove(obj.id)} className='btnRemove'
                                                 src="/img/btnRemove.svg" alt="Remove"/>
                                        </div>
                                    ))
                                }
                                <div className="basketTotalBlock">
                                    <ul>
                                        <li className='d-flex'>
                                            <span>Итого:</span>
                                            <div></div>
                                            <b>{totalPrice} руб.</b>
                                        </li>
                                        <li className='d-flex'>
                                            <span>В том числе налог 20% (НДС):</span>
                                            <div></div>
                                            <b>{NDS} руб.</b>
                                        </li>
                                    </ul>
                                    <button disabled={isLoadingOrder} onClick={onClickOrder} className='confirmBtn'>
                                        Оформить заказ
                                        <img src="/img/arrow.svg" alt="->"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <Info
                            title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
                            image={isOrderComplete ? 'img/offer.svg': 'img/emptyBasket.png'}
                            description={isOrderComplete ?
                                `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                                :
                                'Добавьте хотя бы одну пару кроссовок, чтобы сделатьзаказ.'
                            }
                        />
                }
            </div>
        </div>
    );
};

export default Drawer;