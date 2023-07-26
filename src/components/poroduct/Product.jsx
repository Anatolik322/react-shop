import React, { useState } from 'react'
import 'bulma/css/bulma.min.css';
import "./product.scss"
import {useDispatch} from "react-redux"
import { removeFromCart, addToCart } from '../../services/cartSlice';
import { Card, Content, Heading, Button } from 'react-bulma-components';
import Modal from '../modal/Modal';



function Product({id, img, title, descr, category, price, isInCart, quantity=1}) {
  
  const disp = useDispatch();
  const [modal, setModal] = useState(false)
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
        <Card.Header style={{textAlign: 'rigth'}}>{price}$</Card.Header>
        </Content>
      </Card.Content>
      </div>
       {isInCart ? 
        <Button color={'dark'} onClick={() => disp(removeFromCart(id))}>remove from cart</Button> 
        :
        <Button color={'dark'} onClick={() => {
          disp(addToCart({id, img, title, descr, category, price, isInCart:true, quantity}))
          setModal(true)
          }}>Add to cart</Button>}
         {isInCart && <p> quantity:{ quantity}</p>}
         <Modal isOpen={modal} onClose={ () => setModal(false)} ></Modal>
    </Card>  
  )
}

export default Product;
