import React from 'react'
import Header from '../header/Header'
import Footer from '../footer'
import "./order.scss"
import { useState } from 'react';
import { Form, Button } from 'react-bulma-components';

function Order() {
  const [username, setUsername] = useState('bulma');
  const [email, setEmail] = useState('hello@');
  const [number, setNumber] = useState('0972315530')
  return (
    <div className='order_page'>
        <Header></Header>
        <form>
        <Form.Field>
          <Form.Label>Username</Form.Label>
          <Form.Control>
            <Form.Input
              color=""
              value={username}
              onChange={(e) => {
                return setUsername(e.target.value);
              }}
            />
          </Form.Control>
        </Form.Field>
        
        <Form.Field>
          <Form.Label>Phone number</Form.Label>
          <Form.Control>
            <Form.Input
              color=""
              value={number}
              onChange={(e) => {
                return setNumber(e.target.value);
              }}
            />
          </Form.Control>
        </Form.Field>

        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Control>
            <Form.Input
              value={email}
              onChange={(e) => {
                return setEmail(e.target.value);
              }}
            />
          </Form.Control>
        </Form.Field>
        <Button color="link">Submit</Button>
        <Button color="danger">Cancel</Button>
      </form>
      <Footer className="order_footer"/>
    </div>
  )
}

export default Order
