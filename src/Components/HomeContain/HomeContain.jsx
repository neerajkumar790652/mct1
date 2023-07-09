import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import MyContext from '../../MyContext/MyContext'
import {Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button} from '@chakra-ui/react';
const HomeContain = () => {

  // const [isHovered,setIsHovered] = useState(false)
  const {pizzas} = useContext(MyContext)
// console.log(pizzas)
  //  const handleHover = () => {
  //   setIsHovered(true);
  // };

  // const handleLeave = () => {
  //   setIsHovered(false);
  // };
  return (
    <div className='menu-item '
    // onMouseEnter={handleHover}
    //   onMouseLeave={handleLeave}
      
    >
      {pizzas.map((pizza)=>{
        return(
          <div className='item-card ' key={pizza.id}>
          <Card maxW='sm'>
  <CardBody>
    <Image
      src={pizza.linkImagen}
      alt={pizza.description}
      borderRadius='lg'
      width={100}
      height={100}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{pizza.nombre}</Heading>
      <Text>
       {pizza.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {pizza.precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to="/orderpage"><Button variant='solid' colorScheme='blue'
            
            >
              Add to Cart
            </Button></Link>
          <Link to={`/quickview/${pizza.id}`}>
          <Button variant='ghost' colorScheme='blue'>
           Quick View
          </Button></Link>
         
        </ButtonGroup>
      </CardFooter>
</Card>

          </div>
        )
      })}
      
    </div>
  )
}

export default HomeContain
