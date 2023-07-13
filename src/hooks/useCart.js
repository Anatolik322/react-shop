
import { useSelector, useDispatch } from 'react-redux'

function useCart(){
    const cart = useSelector((state) => state.cartReducer.cartArr)
    return cart;
}

export default useCart;