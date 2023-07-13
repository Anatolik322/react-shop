import { useDispatch } from 'react-redux'
import { addToCart } from '../services/cartSlice'

function useAddToCart(obj = {}) {
    const dispatch = useDispatch()
    dispatch(addToCart(obj));
    return 0;
}

export default useAddToCart;