
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './services/cartSlice';
import Header from './components/header/Header';
import Footer from './components/footer';
import ProductList from './components/productList';


function App() {

  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cartReducer.cartArr);
  console.log(cart)
  return (
    <div className="App" onClick={() => dispatch(addToCart({
      title: 'Test title',
      price: 'Test price'
    }))}>
     App
     <Header/>
     <ProductList/>
     <Footer/>
    </div>
    
  );
}

export default App;
