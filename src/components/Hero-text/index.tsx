import { VStack, Stack, Heading, Button, Icon, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsInstagram } from 'react-icons/bs';

const HeroText: React.FC = () => {
  return (
    <VStack alignItems='flex-start' w='full' spacing={3}>
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
    <Text as='h2' lineHeight='175%'>
      Moro em Minas Gerais e estudo programação. Fiz curso técnico na <strong>Cotemig </strong>em desenvolvimento web/mobile.
      Trabalho na <strong>Kukac </strong> desde 2020.
      <br/>
      Atualmente estou estudando Next.js e React Native ✏️
    </Text>
    <Stack
    className='Social-btn'
    direction={{ base: 'column', md: 'row' }} spacing={3}>
      
        <Button
          as={Link}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          px={4}
          leftIcon={<Icon as={BsGithub} />}
          target='_blank'
          variant='ghost'
          bg='gray.300'
          className='SocialBtn'
          >
          Github
        </Button>
        <Button
          as={Link}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          px={4}
          leftIcon={<Icon as={AiFillLinkedin} />}
          target='_blank'
          variant='ghost'
          bg='blue.100'
          className='SocialBtn'
          >
          LinkedIn
        </Button>
        <Button
          as={Link}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          px={4}
          leftIcon={<Icon as={BsInstagram} />}
          target='_blank'
          variant='ghost'
          bg='pink.100'
          className='SocialBtn'
        >
          Instagram
        </Button>
      
    </Stack>
  </VStack>
  );
}

export default HeroText;