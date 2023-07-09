import Home from './Components/Home/Home'
import QuickView from './Components/QuickView/QuickView'
import {Routes,Route} from 'react-router-dom'

import './App.css'
import Orderpage from './Components/OrderPage/Orderpage'
import PizzaSuccess from './Components/PizzaSucess/PizzaSuccess'
import Menu from './Components/Menu/Menu'

function App() {

  return (
    <>
     <Routes>
      
      <Route path="/"element={<Home/>}/>
      <Route path="/quickview/:id" element={<QuickView/>}/>
      <Route path="/orderpage" element={<Orderpage/>}/>
      <Route path="/pizzaSuccess" element={<PizzaSuccess/>}/>
      <Route path="/menu" element={<Menu/>}/>
      </Routes> 
      
    </>
  )
}

export default App
