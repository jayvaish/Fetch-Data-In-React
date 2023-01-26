
import React from 'react'
import { Box, Flex, Heading, SimpleGrid,  } from "@chakra-ui/react";
import  { useState,useEffect } from 'react'

export const Product = () => {
  const [data, setData] = useState([]);

  const display = async () => {
    try {
        const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
        const data = await res.json();
        console.log(data)
        setData(data.data);
    } catch (error) {
        console.log(error);
    }

}
useEffect(() => {
    display();
}, [])
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="10px" p={"50px"} border="1px solid red">
       {data.map((el)=>(
        <Box border={"1px solid purple"} p={6}>
        <h1>{el.title}</h1>
        <h1>{el.image}</h1>
        <p>{el.price}</p>
        
                  
           
        </Box>
        
       ))}
       
                
           
      </SimpleGrid>
    </>
  )
}
