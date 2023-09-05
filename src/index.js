import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './services/store';
import { Provider } from 'react-redux';
import Cart from './components/cart/Cart';
import Order from './components/order/Order';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Cart></Cart>,
  },
  {
    path: "/order",
    element: <Order/>
  },
  {
    path: "*",
    element: <App/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
);

