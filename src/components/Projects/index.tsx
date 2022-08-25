import React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  TagRightIcon,
  Center,
  Link,
  Divider,
  Box
} from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import CustomToolTip from "../Tag";
import { SiFirebase, SiNextdotjs, SiStyledcomponents, SiTailwindcss } from "react-icons/si";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from 'next/image'

function Projects() {
  return (
    <ChakraProvider>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "25rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem"
        }}
      >
                  {/* Spotify: */}
                  <Flex
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    color="gray.300"
                    bg="base.d100"
                    rounded={5}
                    flex={1}
                    p={5}
                  >
                    <VStack mb={6}>
                      <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                      >
                        Airbnb-Clone
                      </Heading>
                      <Text w="full">App que ultiliza a API do Spotify. O usuario ao clicar em login ultiliza sua conta Spotify onde
                      é possível pesquisar por músicas e as reproduzir.
                      </Text>

                       <Image src={"https://github.com/juan-20/Juan/blob/main/src/assets/projects/airbnb.png?raw=true"} width='1920' height='1080' />

                    </VStack>

                    <Flex justifyContent="space-between">
                      <HStack spacing={2}>

                        <CustomToolTip
                        key='Next'
                        title="Next"
                        details="Framework front-end que possibilita um melhor SEO e páginas mais dinâmicas"
                        color='gray.900'
                        colorScheme='white'
                        photo={<TagRightIcon as={SiNextdotjs} />}
                        />
                        <CustomToolTip
                        key='Tailwind'
                        title="Tailwind"
                        details="Um framework de CSS que com as classes pode construir qualquer design"
                        color='blue.300'
                        colorScheme='teal'
                        photo={<TagRightIcon as={SiTailwindcss} />}
                        />
                      
                      </HStack>
                      <Link isExternal  href='https://github.com/juan-20/Airbnb-clone'
                      >
                        <Button
                          colorScheme="green"
                          fontWeight="bold"
                          size="sm"
                        >
                          Código-fonte 
                          <ExternalLinkIcon mx='2px' />
                        </Button>
                        </Link>
                    </Flex>
                  </Flex>
                  <Divider/>

                  {/* Tinder */}
                  <Flex
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    color="gray.300"
                    bg="base.d100"
                    rounded={5}
                    flex={1}
                    p={5}
                  >
                    <VStack mb={6}>
                      <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                      >
                        Tinder clone
                      </Heading>
                      <Text w="full">App mobile, que realiza login usando o login pelo google.
                      Após concluir o cadastro é exibido ao usuario, outros usuarios onde ele pode escolher dar um match ou não.
                      Ao dar um Match aparece uma tela convidando para os dois conversarem, que envia a uma tela de chat onde os dois podem conversar em tempo real.</Text>

                      <img src={"https://github.com/juan-20/Juan/blob/main/src/assets/projects/tinder.gif?raw=true"} width='1920' height='1080' />

                    </VStack>

                    <Flex justifyContent="space-between">
                      <HStack spacing={2}>

                        <CustomToolTip
                        key='React Native'
                        title="React Native"
                        details="Cria apps mobile crossplataforma de forma nativa com linguagem de web(Javascript)"
                        color='blue.300'
                        colorScheme='teal'
                        photo={<TagRightIcon as={FaReact} />}
                        />
                        <CustomToolTip
                        key='Firebase'
                        title="Firebase"
                        details="Usado na autenticação de usuarios e usado um sercidor NoSQL em tempo real"
                        color='yellow.600'
                        colorScheme='yellow'
                        photo={<TagRightIcon as={SiFirebase} />}
                        />
                      
                      </HStack>
                      <Link isExternal  href='https://github.com/juan-20/Tinder-clone'
                      >
                        <Button
                          colorScheme="green"
                          fontWeight="bold"
                          color="gray.900"
                          size="sm"
                        >
                          Código-fonte 
                          <ExternalLinkIcon mx='2px' />
                        </Button>
                        </Link>
                    </Flex>
                  </Flex>
                  <Divider/>

                  {/* Twitter UI */}
                  <Flex
                    boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                    justifyContent="space-between"
                    flexDirection="column"
                    overflow="hidden"
                    color="gray.300"
                    bg="base.d100"
                    rounded={5}
                    flex={1}
                    p={5}
                  >
                    <VStack mb={6}>
                      <Heading
                        fontSize={{ base: "xl", md: "2xl" }}
                        textAlign="left"
                        w="full"
                        mb={2}
                      >
                        Twitter UI
                      </Heading>
                      <Text w="full">Aplicação com o design do Twitter em que dependendo da tela o design é alterado. 
                      Existe a tela para mobile, para tablet e telas maiores, garantindo uma responsividade em todos dispositivos</Text>
                        

                        <Image src={"https://github.com/juan-20/Juan/blob/main/src/assets/projects/twitter.png?raw=true"} width='1920' height='1080' />
                      


                    </VStack>

                    <Flex justifyContent="space-between">
                      <HStack spacing={1}>

                        <CustomToolTip
                        key='React'
                        title="React"
                        details="Biblioteca front-end de criação de telas reativas"
                        color='blue.300'
                        colorScheme='teal'
                        photo={<TagRightIcon as={FaReact} />}
                        />
                        <CustomToolTip
                        key='Styled Components'
                        title="Styled-Components"
                        details="Usado na estilização por componentes"
                        color='pink.300'
                        colorScheme='purple'
                        photo={<TagRightIcon as={SiStyledcomponents} />}
                        />
                      
                      </HStack>
                      <Link isExternal  href='https://github.com/juan-20/Twitter-UI-Clone'
                      >
                        <Button
                          colorScheme="green"
                          fontWeight="bold"
                          color="gray.900"
                          size="sm"
                        >
                          Código-fonte 
                          <ExternalLinkIcon mx='2px' />
                        </Button>
                        </Link>
                    </Flex>
                  </Flex>

      </Container>
    </ChakraProvider>
  );
}

export default Projects;
