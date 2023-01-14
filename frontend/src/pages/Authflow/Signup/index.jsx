import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { AppleSvg, GoogleSvg, LogoSVG } from '../../../components/Svg';

function Signup() {
  return (
    <Flex w='100%'>
        <Box w='45%' backgroundColor='#111827' height='100vh'>
            <Box mx={50} my={5} w='6.1em' h='3.1em'>
                <LogoSVG/>
            </Box>
            <Box my={220} mx={50}>
            <Text my={3} color='white' fontWeight={700} fontSize='2.5em' letterSpacing='-0.05em' lineHeight='1em'>
                Get Started.
            </Text>
            <Text color='rgba(255, 255, 255, 0.4)' fontSize='0.8em' lineHeight='1em' letterSpacing='-0.03em'>
                Get the best out of music everyday and anyday or today with reviews too.
            </Text>
            <Button  w='100%' h='4em' marginTop={10} background='rgba(255, 193, 7, 0.1);' color='#FFC107' borderRadius='1em'>
                <Flex w='5em' h='4em' background='rgba(255, 193, 7, 0.1);' borderRadius='1em' marginLeft='-1em' justifyContent='center'>
                    <GoogleSvg/>
                </Flex>
                <Text fontSize='1em' w='25em' lineHeight='1em' marginLeft='4em'>CONTINUE WITH GOOGLE</Text>
            </Button>
            <Button  w='100%' h='4em' marginTop='1.4em' background='rgba(255, 255, 255, 0.05);' color='white' borderRadius='1em'>
                <Flex w='5em' h='4em' background='rgba(255, 255, 255, 0.05);' borderRadius='1em' marginLeft='-1em' justifyContent='center' textAlign='center'>
                    <AppleSvg/>
                </Flex>
                <Text fontSize='1em' w='25em' lineHeight='1em' marginLeft='5em'>CONTINUE WITH APPLE</Text>
            </Button>
            <Text my={4} color='rgba(255, 255, 255, 0.5);' letterSpacing='-0.05em' fontSize='0.7em' fontStyle='italic' lineHeight='0.8em'>
                By logging in you accept our <span style={{color: 'white', fontWeight: '500'}}>Terms & Conditons</span>
            </Text>
            </Box>
        </Box>
        <Box w='55%' backgroundColor='#172135' height='100vh'/>
    </Flex>
  )
}

export default Signup;