import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PizzaContext } from './MyContext/MyContext.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <PizzaContext>
<ChakraProvider>
<App />
</ChakraProvider>
     
 </PizzaContext></BrowserRouter>
 
  
)
