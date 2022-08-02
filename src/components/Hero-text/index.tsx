import { VStack, Stack, Heading, Button, Icon, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const HeroText: React.FC = () => {
  return (
    <VStack alignItems='flex-start' spacing={3} p={2}>
    <Stack
      alignItems='center'
      justifyContent={{ base: 'center', md: 'flex-start' }}
      direction={{ base: 'column', md: 'row' }}
      w='full'
      spacing={3}
    >
      <Heading as='h1' size='lg'>
        Oi, eu sou o Juan.
      </Heading>
    </Stack>
    <Stack
    display='flex'
      alignItems='center'
      justifyContent='center'
      spacing={3}
      p='1rem'
    >
    <Text fontSize='md' as='h2' lineHeight='175%'>
      Moro em Minas Gerais, tenho 19 anos e estudo programação. Fiz curso técnico na <strong>Cotemig </strong>em desenvolvimento web/mobile.
      Trabalho na <strong>Kukac </strong> desde 2020 como Desenvolvimento Front-End e Tester. ✏️
      <br/>
    </Text>
    </Stack>

    <Stack
    display='flex'
    alignItems='center'
    justifyContent='center'
    width='100%'
    direction={{ base: 'column', md: 'row' }} spacing={3}>
      
        <Button
          as={Link}
          px={4}
          leftIcon={<Icon as={BsGithub} />}
          colorScheme='gray'
          width='30%'
          >
          Github
        </Button>
        <Button
          as={Link}
          px={4}
          leftIcon={<Icon as={AiFillLinkedin} />}
          target='_blank'
          colorScheme='linkedin'
          width='30%'
          >
          LinkedIn
        </Button>
        <Button
          as={Link}
          px={4}
          leftIcon={<Icon as={BsInstagram} />}
          target='_blank'
          colorScheme='pink'
          width='30%'
        >
          Instagram
        </Button>
      
    </Stack>
  </VStack>
  );
}

export default HeroText;