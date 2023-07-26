import React from 'react'
import { Button } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import "./modal.scss"

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Goods Added to Cart</h2>
          <p>Your selected goods have been added to the cart.</p>
          <Button color={'success'}><Link to={'/cart'} style={{color: '#fff'}} >Go to cart</Link> </Button>
          <Button onClick={onClose} > Back to shopping </Button>        
        </div>
      </div>
    );
  };

export default Modal;
