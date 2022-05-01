import { VStack, Stack, Heading, Button, Icon, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub, BsInstagram } from 'react-icons/bs';

// import { Container } from './styles';

const HeroText: React.FC = () => {
  return (
    <VStack alignItems="flex-start" w="full" spacing={3}>
    <Stack
      alignItems="center"
      justifyContent={{ base: "center", md: "flex-start" }}
      direction={{ base: "column", md: "row" }}
      w="full"
      spacing={3}
    >
      <Heading as="h1" size="lg">
        Oi, eu sou o Juan.
      </Heading>
    </Stack>
    <Text as="h2" lineHeight="175%">
      Eu sou um blablablabla <strong>Destaque. </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    </Text>
    <Stack direction={{ base: "column", md: "row" }} spacing={3}>
      
        <Button
          as={Link}
          justifyContent={{ base: "flex-start", md: "center" }}
          px={4}
          leftIcon={<Icon as={BsGithub} />}
          target="_blank"
          variant="ghost"
          bg='gray.300'
        >
          Github
        </Button>
        <br/>
        <Button
          as={Link}
          justifyContent={{ base: "flex-start", md: "center" }}
          px={4}
          leftIcon={<Icon as={AiFillLinkedin} />}
          target="_blank"
          variant="ghost"
          bg='blue.100'
        >
          LinkedIn
        </Button>
        <Button
          as={Link}
          justifyContent={{ base: "flex-start", md: "center" }}
          px={4}
          leftIcon={<Icon as={BsInstagram} />}
          target="_blank"
          variant="ghost"
          bg='pink.100'
        >
          Instagram
        </Button>
      
    </Stack>
  </VStack>
  );
}

export default HeroText;