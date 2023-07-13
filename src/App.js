
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './services/cartSlice';
import { useGetGoodsQuery, useGetByCategoryQuery } from './services/shop';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';
import Slider from './components/slider';
import useCart from './hooks/useCart';


function App() {

  const cart = useSelector(state => state.cartReducer.cartArr);
  const state = useCart()
  console.log(state)
  return (
    <div className="App">
      <Header/>
      <Slider></Slider>
      <ProductList/>
      <Footer/>
    </div>
    
  );
}

export default App;
