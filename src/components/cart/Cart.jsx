import React from 'react'
import Header from '../header/Header'
import useCart from '../../hooks/useCart';
import Product from '../poroduct';
import "../productList/ProductLIst.scss"
import Footer from '../footer/Footer';
import './cart.scss'
import { Button } from 'react-bulma-components';
import { useDispatch } from 'react-redux';
import { clearState } from '../../services/cartSlice';
import { Link } from 'react-router-dom';
function Cart() {

  const 
  cart = useCart(),
  dispatch = useDispatch();
  let totalPrice = 0;

  return (
    <div className='cart'>
      <Header></Header>
      <div className="content">
        <div className='product_list'>
          {
            cart.length > 0 && cart.map(e => {
              totalPrice+=e.price;
              totalPrice*=e.quantity
              return (
                <Product 
                img={e.img}
                title={e.title}
                price={e.price}
                descr={e.descr}
                isInCart={true}
                id={e.id}
                key={Math.random()}
                quantity={e.quantity}/>
              )
            })
          }
        </div>
        <div className="order">
          <Button color={'danger'} className='cart_btn' onClick={() => (dispatch( clearState() ))}>Remove all</Button>
          <h3> Total: {totalPrice}$</h3>
          <Link to={'/order'}><Button color={'success'} className='cart_btn'>Make order</Button></Link> 
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  )
}

export default Cart;
