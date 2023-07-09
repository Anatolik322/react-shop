
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './services/cartSlice';
import { useGetGoodsQuery, useGetByCategoryQuery } from './services/shop';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';
import Slider from './components/slider';


function App() {

  const {data, isSuccess } = useGetGoodsQuery();
  const {data: d, isSuccess: s} = useGetByCategoryQuery('jewelery');
  s && console.log(d);
  isSuccess && console.log(data);
  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cartReducer.cartArr);
  console.log(cart)
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
