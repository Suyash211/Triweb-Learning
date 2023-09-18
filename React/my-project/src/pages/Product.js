import React from 'react'
import ProductList from '../components/product/ProductList';
const Product = () => {
    let products = [
        {
            id : 'p1',
            product_name : "City Tour",
            images : "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1600",
            description : "It is a good tour",
            price : "20000"
        },
        {
            id : 'p2',
            product_name : "Forest Tour",
            images : "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=1600",
            description : "It is a refresher tour",
            price : "50000"
        },
    ];
  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default Product
