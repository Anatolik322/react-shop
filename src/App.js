
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './services/cartSlice';

function App() {

  const dispatch = useDispatch();
  
  const cart = useSelector(state => state.cartReducer.cartArr);
  console.log(cart)
  return (
    <div className="App" onClick={() => dispatch(addToCart('test'))}>
     App
    </div>
  );
}

export default App;
