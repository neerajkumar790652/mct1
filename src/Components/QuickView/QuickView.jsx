import React, { useContext } from 'react';
import { useParams,useNavigate,Link } from 'react-router-dom';
import MyContext from '../../MyContext/MyContext';

import './QuickView.css'
const QuickView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pizzas } = useContext(MyContext);
console.log(pizzas)
  const pizza = pizzas.find(pizza => pizza.id == id);
console.log(pizza)
  return (
    <div className='quick-container'>
     <div className='quick-image'>
        <img src={pizza.linkImagen} alt=''/>
     </div>
     <div className='quick-info'>
     
        <h1>{pizza.nombre}</h1>
        <h3>$&nbsp;{pizza.precio}</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, aperiam veniam? Cupiditate dicta, distinctio voluptatem fuga in vero quidem autem nam voluptate cum dolor aliquam, ullam ipsam est omnis itaque.</p>
        <h3>NUTRITIONAL VALUE PER 100 G </h3>
        <p>Calroies......................................................800 kcal</p>
        <p>Carbohydrated...............................................20g</p>
         <p>squirrels......................................................30g</p>
         <p>Fats...........................................................50g</p>
         <h3>COLA :$7.00</h3>
         <h3>MEAL :$50.00</h3>
         <Link to="/orderpage"><button>Add to Cart</button></Link>
         < button onClick={() => {
          navigate("/")}}>Back</button>
     </div>
    </div>
  );
};

export default QuickView;
