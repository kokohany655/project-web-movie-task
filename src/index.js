import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider} from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  
  <BrowserRouter>
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
  </BrowserRouter>
  
);
