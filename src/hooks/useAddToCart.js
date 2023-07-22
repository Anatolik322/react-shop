import { useDispatch } from 'react-redux'
import {useState, useEffect, useRef} from "react"
import { addToCart } from '../services/cartSlice'

function useAddToCart(obj = {}) {
    const dispatch = useDispatch();
    
    const [ active, setActive ] = useState(false);
    
    function toggle() {
        setActive(!active);
    }

    function handleClick(e) { 
        dispatch(addToCart(obj));
        setActive(false);
    }

    useEffect(() => { 
        if (active) document.addEventListener('mousedown', handleClick);
        else document.removeEventListener('mousedown', handleClick);
        return () => {
          document.removeEventListener('mousedown', handleClick);
        }; 
    }, [ active ]);
   
    
    return { active, setActive, toggle };
}

export default useAddToCart;
// -------------

  
  
  
//   function handleClick(e) { 
//     if (!ref.current.contains(e.target)) setActive(false);
//   }
   
//   useEffect(() => { 
//     if (active) document.addEventListener('mousedown', handleClick);
//     else document.removeEventListener('mousedown', handleClick);
//     return () => {
//       document.removeEventListener('mousedown', handleClick);
//     }; 
//   }, [ active ]);
//   return { ref, active, setActive, toggle };
// }
// We use useEffect, useState and useRef hooks provided by React.

