import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { store } from './services/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/2",
    element: <h1>pagw 2</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
    
);

