import { Flex } from '@chakra-ui/react'
import React from 'react'

const PageContent = ({ children }) => {
  return (
    <Flex
      minHeight={'100vh'}
      width={'100vw'}
      alignItems={'center'}
      justifyContent='top'
      direction={'column'}
    >
      {children}
    </Flex>
  )
}

export default PageContent
