import React from 'react';
import axios from "axios";
import {Route} from 'react-router-dom'
import Header from './Components/Header'
import Index from "./Components/Drawer/";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";

export const AppContext = React.createContext({});

function App() {

    const [items, setItems] = React.useState([]);
    const [basketItems, setBasketItems] = React.useState([]);
    const [favourites, setFavourites] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [basketOpened, setBasketOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true)
                const cartResp = await axios.get('https://60ec458ae9647b0017cde13f.mockapi.io/cart');
                const favResp = await axios.get('https://60ec458ae9647b0017cde13f.mockapi.io/favorites');
                const itemsResp = await axios.get('https://60ec458ae9647b0017cde13f.mockapi.io/items');

                setIsLoading(false)

                setFavourites(favResp.data)
                setBasketItems(cartResp.data)
                setItems(itemsResp.data)
            } catch (e) {
                alert(e)
            }
        }

        fetchData()
    }, [])

    const onAddBasket = async (obj) => {
        const findItem = basketItems.find((item) => Number(item.parentId) === Number(obj.id))
        try {
            if (findItem) {
                await axios.delete(`https://60ec458ae9647b0017cde13f.mockapi.io/cart/${findItem.id}`).then();
                setBasketItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
            } else {
                const { data } = await axios.post('https://60ec458ae9647b0017cde13f.mockapi.io/cart', obj).then();
                setBasketItems(prev => [...prev, data]);
            }
        } catch (e) {
            alert(e);
        }
    }
    const onRemoveBasketItem = async (id) => {
        try {
            await axios.delete(`https://60ec458ae9647b0017cde13f.mockapi.io/cart/${id}`).then();
            setBasketItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
        } catch (e){
            alert(e)
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    }

    const onAddFavourite = async (obj) => {
        try {
            if (favourites.find(favObj => Number(favObj.id) === Number(obj.id))) {
                axios.delete(`https://60ec458ae9647b0017cde13f.mockapi.io/favorites/${obj.id}`).then();
                setFavourites(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://60ec458ae9647b0017cde13f.mockapi.io/favorites', obj).then();
                setFavourites(prev => [...prev, data]);
            }
        } catch (error) {
            alert(error)
        }

    }

    const isItemAdded = (id) => {
        return basketItems.some(obj => Number(obj.parentId) === Number(id))
    }

    return (
        <AppContext.Provider value={{
            basketItems,
            favourites,
            items,
            isItemAdded,
            onAddFavourite,
            onAddBasket,
            setBasketOpen,
            setBasketItems
        }}>
            <div className="wrapper clear">
                <Index
                    items={basketItems}
                    onRemove={onRemoveBasketItem}
                    onCloseCart={() => setBasketOpen(false)}
                    opened={basketOpened}
                />
                <Header onClickBasket={() => setBasketOpen(true)}/>
                <Route path='/' exact>
                    <Home
                        items={items}
                        basketItems={basketItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddBasket={onAddBasket}
                        onAddFavourite={onAddFavourite}
                        isLoading={isLoading}
                    />
                </Route>
                <Route path='/favourites' exact>
                    <Favourites/>
                </Route>
                <Route path='/user' exact>
                    <Orders />
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
