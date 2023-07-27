import  { useState } from 'react'
import 'bulma/css/bulma.min.css';
import "./product.scss"
import {useDispatch} from "react-redux"
import { removeFromCart, addToCart } from '../../services/cartSlice';
import { Card, Content, Heading, Button } from 'react-bulma-components';
import Modal from '../modal/Modal';

export {
    useDispatch,
    useState,
    removeFromCart,
    addToCart,
    Card,
    Content,
    Heading,
    Button,
    Modal
}