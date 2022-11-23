import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'

const Nav = () => {
  return (
    <Flex bg={'teal.400'} width={'full'} justify={'center'}>
      <Flex alignItems={'center'} width={'80%'} justify={'center'}>
        <Flex width={'10%'}></Flex>
        <Flex width={'80%'} justify={'center'}>
          <Text fontSize={'lg'}>Tasks</Text>
        </Flex>
        <Flex width={'10%'} justify={'center'}>
          <FaUserCircle fontSize={'2rem'} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Nav
