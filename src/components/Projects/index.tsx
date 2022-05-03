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
  Link
} from "@chakra-ui/react";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import CustomToolTip from "../Tag";
import { SiFirebase, SiNextdotjs, SiStripe, SiStyledcomponents, SiTailwindcss, SiTypescript } from "react-icons/si";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from 'next/image'
import spotify from '../../assets/projects/spotify.gif'
import Carousel from "../Carousel";
import { BsFillGearFill } from "react-icons/bs";

function Projects() {
  return (
    <ChakraProvider>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
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
                  Spotify Clone
                </Heading>
                <Text w="full">App que ultiliza a API do Spotify. O usuario ao clicar em login ultiliza sua conta Spotify onde
                é possível pesquisar por músicas e as reproduzir.
                </Text>

                  <Carousel
                  Firstimage='https://camo.githubusercontent.com/e9764a7a076e76b230adbdbdbb59fb312bb4c40438b9ab90f121ec3957af7aac/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f31526c396572523534427153666f6158306d2f67697068792e6769663f6369643d373930623736313161643536336638323939316364663339393335336562313034326664353030393161393335373132267269643d67697068792e6769662663743d67'
                  secondImage='https://camo.githubusercontent.com/3981fc1a827a68680c02aeb0da938f9bcb634f640dfd12198b432917b70d85f2/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f754b655a32424d6e5375456964704336326c2f67697068792e676966'
                  />

              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>

                  <CustomToolTip
                  key='React'
                  title="React"
                  details="Biblioteca front-end de criação de telas reativas"
                  color='blue.300'
                  colorScheme='teal'
                  photo={<TagRightIcon as={FaReact} />}
                  />
                  <CustomToolTip
                  key='Node'
                  title="Node"
                  details="Cria um servidor para realizar requisições"
                  color='green.500'
                  colorScheme='teal'
                  photo={<TagRightIcon as={FaNodeJs} />}
                  />
                
                </HStack>
                <Link isExternal  href='https://github.com/juan-20/spotify-clone'
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
                <Text w="full">App mobile, que ao fazer login pela sua conta google, 
                pede uma foto para ser de perfile informações básicas que serão exibidas a outros usuarios.
                Após concluir o cadastro é exibido ao usuario, outros usuarios onde ele pode escolher dar um match ou não.
                Ao dar um Match aparece uma tela convidando para os dois conversarem, que envia a uma tela de chat onde os dois podem conversar em tempo real.</Text>

                  {/* <Carousel
                  Firstimage='https://camo.githubusercontent.com/e9764a7a076e76b230adbdbdbb59fb312bb4c40438b9ab90f121ec3957af7aac/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f31526c396572523534427153666f6158306d2f67697068792e6769663f6369643d373930623736313161643536336638323939316364663339393335336562313034326664353030393161393335373132267269643d67697068792e6769662663743d67'
                  secondImage='https://camo.githubusercontent.com/3981fc1a827a68680c02aeb0da938f9bcb634f640dfd12198b432917b70d85f2/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f754b655a32424d6e5375456964704336326c2f67697068792e676966'
                  /> */}

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
                  <CustomToolTip
                  key='Tailwind'
                  title="Tailwind"
                  details="Um framework CSSque deixa amis facil a declaração das classes"
                  color='blue.600'
                  colorScheme='purple'
                  photo={<TagRightIcon as={SiTailwindcss} />}
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

                  {/* <Carousel
                  Firstimage='https://camo.githubusercontent.com/e9764a7a076e76b230adbdbdbb59fb312bb4c40438b9ab90f121ec3957af7aac/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f31526c396572523534427153666f6158306d2f67697068792e6769663f6369643d373930623736313161643536336638323939316364663339393335336562313034326664353030393161393335373132267269643d67697068792e6769662663743d67'
                  secondImage='https://camo.githubusercontent.com/3981fc1a827a68680c02aeb0da938f9bcb634f640dfd12198b432917b70d85f2/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f754b655a32424d6e5375456964704336326c2f67697068792e676966'
                  /> */}

              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>

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
                  title="Styled Components"
                  details="Usado na estilização por componentes"
                  color='pink.300'
                  colorScheme='purple'
                  photo={<TagRightIcon as={SiStyledcomponents} />}
                  />
                   <CustomToolTip
                  key='Typescript'
                  title="Typescript"
                  details="Infraestrutura de pagamentos para internet"
                  color='blue.300'
                  colorScheme='blue'
                  photo={<TagRightIcon as={SiTypescript} />}
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
                  {/* Ig.News */}
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
                  Letmeask
                </Heading>
            
                <Text w="full">Aplicação feita durante uma NLW da Rocketseat. Nela ao fazer o login pelo Google
                você pode criar uma nova sala para fazer alguma pergunta ou copiar o link de alguma já criada.
                Você pode postar uma pergunta, compartilhar a sala da sua duvida e receber respostas que
                podem ser avaliadas por um botão de curtir.


                </Text>

                  {/* <Carousel
                  Firstimage='https://camo.githubusercontent.com/e9764a7a076e76b230adbdbdbb59fb312bb4c40438b9ab90f121ec3957af7aac/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f31526c396572523534427153666f6158306d2f67697068792e6769663f6369643d373930623736313161643536336638323939316364663339393335336562313034326664353030393161393335373132267269643d67697068792e6769662663743d67'
                  secondImage='https://camo.githubusercontent.com/3981fc1a827a68680c02aeb0da938f9bcb634f640dfd12198b432917b70d85f2/68747470733a2f2f6d65646961322e67697068792e636f6d2f6d656469612f754b655a32424d6e5375456964704336326c2f67697068792e676966'
                  /> */}

              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>

                  <CustomToolTip
                  key='Next'
                  title="Next"
                  details="Um framework React com melhor expêriencia para produção."
                  color='gray.800'
                  colorScheme='black'
                  photo={<TagRightIcon as={SiNextdotjs} />}
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
                <Link  isExternal  href='https://github.com/juan-20/letmeask'
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
