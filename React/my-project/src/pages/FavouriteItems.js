import React from 'react'
import { useContext } from 'react'
import { FavouriteContext } from '../store/ContextFavourite';
import ProductList from '../components/product/ProductList';

const FavouriteItems = () => {
    const favouriteContext= useContext(FavouriteContext);
  return (
    <div>
        <h1> Favourite Items </h1>
        <ProductList products={favouriteContext.favouriteItems}/>
    </div>
  )
}

export default FavouriteItems
