import { createContext,useEffect,useState } from "react";
import axios from "axios";
const MyContext = createContext();
export default MyContext;
export const PizzaContext = ({children})=>{
  const [pizzas,setPizzas] =useState([])
    useEffect(()=>{
        axios.get('https://pizzaallapala.p.rapidapi.com/productos',{
         headers:{
           'X-RapidAPI-Key': '700c960acbmsh2533a6fb6ed929ap1ff1f4jsn390c830fa81a',
         'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
         }
       }).then((response)=>{
         setPizzas(response.data.productos)
       })
      },[])
    return(
        <MyContext.Provider value={{pizzas,setPizzas}}>
            {children}
        </MyContext.Provider>
    )
}