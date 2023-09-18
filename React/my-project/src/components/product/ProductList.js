import React from 'react'
import ProductItem from './ProductItem'
import Styles from './ProductList.module.css'

const ProductList = (props) => {
  return (
    <ul className={Styles.list}>
        {props.products.map((item) => {
            {/* return <li key={item.id}> {item.product_name} </li> */}
            return <ProductItem item={item}/>
        })}
    </ul>
  )
}

export default ProductList
