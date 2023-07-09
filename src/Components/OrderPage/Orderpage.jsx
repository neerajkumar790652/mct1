import React from 'react'
import { Heading, Input,Text } from '@chakra-ui/react'
import { Radio, RadioGroup,Stack,Checkbox,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './orderPage.css'
const Orderpage = () => {
    const [value, setValue] = React.useState('1')
  return (
    <div className='order-container'>
      <div className='form'>
        <Heading color="white">WELCOME TO ITALIAN PIZZA! </Heading>
        <Text fontSize='lg' color="white">We Deliver pizza in 40 minutes max.If not- pizza's on us</Text>
        <Text></Text>
        <h2 >Email</h2><Input placeholder='email' w={450} marginTop={2}/>
        <h2 >Phone no</h2><Input placeholder='Phone no' w={450} marginTop={2}/>
        <h2 >Number of Slice</h2><Input placeholder='Number of Slice' w={450} marginTop={2}/>
        <h2>Pizza size</h2>
        <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row'>
        <Radio value='1' color="white"><h2>8-inch</h2></Radio>
        <Radio value='2' color="white"><h2>10-inch</h2></Radio>
        <Radio value='3' color="white"><h2>12-inch</h2></Radio>
        <Radio value='3' color="white"><h2>14-inch</h2></Radio>
      </Stack>
    </RadioGroup>
    <h2>Toppings</h2>
    <Stack spacing={5} direction='row'>
  <Checkbox colorScheme='red' defaultChecked>
    <h2>Peperoni</h2>
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    <h2>Onions</h2>
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    <h2>Mushrooms</h2>
  </Checkbox>
  <Checkbox colorScheme='green' defaultChecked>
    <h2>Sausage</h2>
  </Checkbox>
</Stack>
<Checkbox defaultChecked marginTop={2}><h2>I Agreed to the TERMS AND CONDITIONS</h2></Checkbox>
<br/>

<Link to="/pizzaSuccess">
<Button colorScheme='orange' w={450} mt={6} >Order Now</Button>
</Link>
        </div> 
    </div>
  )
}

export default Orderpage
