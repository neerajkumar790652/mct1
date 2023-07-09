import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import MyContext from '../../MyContext/MyContext'
const QuickDetails = () => {
    const {id} =useParams()
    const {pizzas} = useContext(MyContext);
    const singlePizza = pizzas.find((singlePizza)=>singlePizza.id === id);
  return (
    <div>
      <h1>{singlePizza.nombre}</h1>
    </div>
  )
}

export default QuickDetails

