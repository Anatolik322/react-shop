import React from 'react'
import 'bulma/css/bulma.min.css';
import "./product.scss"
import useAddToCart from '../../hooks/useAddToCart';
import { Card, Content, Heading, Button } from 'react-bulma-components';

function Product({img, title, descr, category, price}) {
  const { ref, active, toggle } = useAddToCart({img, title, descr, category, price});

  return (
    <Card style={{ width: 300,   margin: 0 }} ref = {ref} className='card'>
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
       
      <Button color={'dark'} onClick={toggle}>Add to cart</Button>
    </Card>
  )
}

export default Product;
