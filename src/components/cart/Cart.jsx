import React from 'react'
import Header from '../header/Header'
import useCart from '../../hooks/useCart';
import Product from '../poroduct';
import "../productList/ProductLIst.scss"
function Cart() {

  const cart = useCart()
  console.log(cart)
  return (
    <div className='cart'>
      <Header></Header>
      <div className='product_list'>
        {cart.length > 0 && cart.map(e => {
        return <Product 
          img={e.img}
          title={e.title}
          price={e.price}
          descr={e.descr}
          isInCart={true}
          id={e.id}/>
        })}
      </div>
    </div>
  )
}

export default Cart;
