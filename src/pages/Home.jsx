import React from 'react';
import Card from "../Components/Card";


function Home({
                  items,
                  searchValue,
                  setSearchValue,
                  onChangeSearchInput,
                  onAddBasket,
                  onAddFavourite,
                  isLoading
})
{
    const renderItems = () => {
        const filteredItems = items && items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(4)] : filteredItems)
            .map((item, itemIndex) => (
                <Card
                    key={itemIndex}
                    onClickAddBasket={(obj) => onAddBasket(obj)}
                    onClickFavourite={(obj) => onAddFavourite(obj)}

                    {...item}
                    loading = {isLoading}
                />
            ))
    }

    return (
        <section className="content p-40">
            <div className='mb-30 d-flex justify-between align-center'>
                <h1>{searchValue ? `По запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="searchBlock d-flex">
                    <img src='/img/search.svg' alt="Search"/>
                    {searchValue &&
                    <img
                        onClick={() => setSearchValue('')}
                        className='btnSearchClear btnRemove cu-p'
                        src="/img/btnRemove.svg"
                        alt="Clear"
                    />
                    }
                    <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder='Поиск...'/>
                </div>
            </div>
            <div className="catalog d-flex justify-around flex-wrap">
                {
                    renderItems()
                }
            </div>
        </section>
    );
}

export default Home;