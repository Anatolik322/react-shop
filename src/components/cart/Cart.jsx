import React from 'react'
import Header from '../header/Header'
import useCart from '../../hooks/useCart';
import Product from '../poroduct';
import "../productList/ProductLIst.scss"
import Footer from '../footer/Footer';
import './cart.scss'
function Cart() {

  const cart = useCart()
  let totalPrice = 0;
  return (
    <div className='cart'>
      <Header></Header>
      <div className='product_list'>
        {cart.length > 0 && cart.map(e => {
          totalPrice+=e.price
        return <Product 
          img={e.img}
          title={e.title}
          price={e.price}
          descr={e.descr}
          isInCart={true}
          id={e.id}
          key={Math.random()}/>
        })}
      </div>
      <h3> Total: {totalPrice}</h3>
      <Footer></Footer>
    </div>
  )
}

export default Cart;
