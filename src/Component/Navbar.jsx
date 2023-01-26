import React from 'react'
import { Flex, Heading} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <Flex border="1px solid black" justifyContent="space-evenly">
        <Link to="/">
        <Heading>
        Product
    </Heading>
    </Link>
    <Link to="/wish">
    <Heading>
        Wishlist
    </Heading>
    </Link>
        </Flex>
    </div>
  )
}
