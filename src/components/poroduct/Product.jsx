import React from 'react'
import 'bulma/css/bulma.min.css';
import "./product.scss"
import useAddToCart from '../../hooks/useAddToCart';
import {useDispatch} from "react-redux"
import { removeFromCart, addToCart } from '../../services/cartSlice';
import { Card, Content, Heading, Button } from 'react-bulma-components';
import { useState } from 'react';

function Product({id, img, title, descr, category, price, isInCart}) {
  
  //const { ref, active, toggle } = useAddToCart({id, isInCart: true, img, title, descr, category, price});
  const disp = useDispatch();
  console.log({id, img, title, descr, category, price, isInCart})
 
 
  return (
    <Card style={{ width: 300,   margin: 0 }}  className='card'>
      <div>
      <Card.Image
        size="4by4"
        src={img}
      />
      <Card.Content>
        <Content>
        <Heading size={4}>{title}</Heading>
        <Card.Header style={{textAlign: 'rigth'}}>{price}</Card.Header>
        </Content>
      </Card.Content>
      </div>
       {isInCart ? 
        <Button color={'dark'} onClick={() => disp(removeFromCart(id))}>remove from cart</Button> 
        :
        <Button color={'dark'} onClick={()=> disp(addToCart({id, img, title, descr, category, price, isInCart:true}))}>Add to cart</Button>}
    </Card>  
  )
}

export default Product;
