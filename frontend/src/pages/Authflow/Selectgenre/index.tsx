import {useEffect, useState} from 'react'
import { Spinner, Flex, Box, Button, Input, Text} from '@chakra-ui/react'


function Selectgenre({genres} : any) {
  return (
    <Flex w='100%' h='100vh' background='#111827;'>
        <Box w='50%' h='80%' margin='auto'>
          <Text fontSize='2em' fontWeight='700' color='white'>Select your favorite genre</Text>
          <Input width='80%' height='3em' my={5} marginBottom="3em" placeholder='Search for genre' color='white' borderColor='green'/>
          <Flex width='80%' height='10em' flexWrap='wrap' margin='auto' justifyContent='center'>
          {genres.slice(0, 11).map((item : string, index : number) => 
              <Flex key={index} width='6.5em' height='2.5em' mx={3} mt='1.6em' background='#172135' color=' #FFFFFF' borderRadius='624.9em'>
                <Text margin='auto' fontFamily='Barlow Condensed'>{item}</Text> 
              </Flex>
            )}
          </Flex>
          <Button mt='9em' w='32em' h='3.75em' background='rgba(16, 185, 112, 0.1)' color='#10B970' fontFamily='Barlow Condensed' fontSize='1.25em' borderRadius='1em'>
            Next
          </Button>
        </Box>
    </Flex>
  )
}

export default Selectgenre;



 
