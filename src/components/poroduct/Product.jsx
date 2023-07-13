import React from 'react'
import 'bulma/css/bulma.min.css';
import useAddToCart from '../../hooks/useAddToCart';
import { Card, Content, Heading, Button } from 'react-bulma-components';

function Product({img, title, descr, category, price}) {

  return (
    <Card style={{ width: 300, margin: 0 }}>
      <Card.Image
        size="4by3"
        src={img}
      />
      <Card.Content>
        <Content>
        <Heading size={4}>{title}</Heading>
        <Card.Header style={{textAlign: 'rigth'}}>{price}</Card.Header>
        </Content>
        <Button color={'dark'}>Add to cart</Button>
      </Card.Content>
    </Card>
  )
}

export default Product;
