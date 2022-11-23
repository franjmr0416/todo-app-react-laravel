import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Card = (props) => {
  const { id, content, completed, deadline } = props
  return (
    <Flex
      alignItems={'center'}
      direction={'column'}
      boxShadow={'base'}
      borderRadius={'lg'}
      padding={'2'}
      width={'full'}
    >
      <Flex justifyContent={'space-between'} width={'full'}>
        <Text>{content}</Text>
        <div>{completed === 0 ? 'Pendiente' : 'Completada'}</div>
      </Flex>
      <span>{deadline}</span>
    </Flex>
  )
}

export default Card
