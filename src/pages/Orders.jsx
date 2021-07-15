import React from 'react';
import Card from "../Components/Card";
import axios from "axios";
import {AppContext} from "../App";

function Orders() {
    const { onAddFavourite } = React.useContext(AppContext)
    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        ( async () => {
            try{
                const { data } = await axios.get('https://60ec458ae9647b0017cde13f.mockapi.io/orders')
                setOrders(data.map((obj) => obj.items).flat())
                setIsLoading(false)
            } catch (e){
                alert(e)
            }
        })();
    },[]);

    return (
        <section className="content p-40">
            <div className='mb-30 d-flex justify-between align-center'>
                <h1>Мои заказы</h1>
            </div>
            <div className="catalog d-flex justify-center flex-wrap">
                {(isLoading ? [...Array(4)] : orders)
                    .map((item, itemIndex) => (
                        <Card
                            key={itemIndex}
                            onClickFavourite={(obj) => onAddFavourite(obj)}
                            {...item}
                            loading = {isLoading}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Orders;