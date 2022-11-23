import { Flex } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'

const List = ({ tasks }) => {
  return (
    <Flex direction={'column'} width={'full'} paddingTop='2' paddingX='4'>
      {tasks.map((x) => {
        return (
          <Card
            key={x.id}
            id={x.id}
            content={x.content}
            completed={x.completed}
            deadline={x.deadline}
          />
        )
      })}
    </Flex>
  )
}

export default List
