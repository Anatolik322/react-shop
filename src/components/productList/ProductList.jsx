import React from 'react'
import Product from '../poroduct';
import { useGetGoodsQuery } from '../../services/shop';
import "./ProductLIst.scss"

function ProductList() {
  const { isSuccess, data} = useGetGoodsQuery()
  isSuccess&& console.log(data)
  return (
    <div className='product_list'>
      {isSuccess && data.map(e => {
        return <Product 
        img={e.image}
        title={e.title}
        price={e.price}
        descr={e.description}/>
      })}
    </div>
  )
}

export default ProductList;
