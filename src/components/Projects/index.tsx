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
  TagRightIcon
} from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import CustomToolTip from "../Tag";
import { SiFirebase } from "react-icons/si";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Image from 'next/image'
import spotify from '../../assets/projects/spotify.gif'
import Carousel from "../Carousel";

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
                <Text w="full">Subtitulo</Text>

                  <Image 
                      src={spotify}
                      width={400}
                      height={400}
                      layout='intrinsic'
                  />
                  <Carousel/>

              </VStack>

              <Flex justifyContent="space-between">
                <HStack spacing={2}>

                  <CustomToolTip
                  key='React Native'
                  title="React Native"
                  details="Native"
                  color='blue.300'
                  colorScheme='teal'
                  photo={<TagRightIcon as={FaReact} />}
                  />
                  <CustomToolTip
                  key='Firebase'
                  title="Firebase"
                  details="Native"
                  color='yellow.600'
                  colorScheme='yellow'
                  photo={<TagRightIcon as={SiFirebase} />}
                  />
                
                </HStack>
                  <Button
                    colorScheme="green"
                    fontWeight="bold"
                    color="gray.900"
                    size="sm"
                  >
                    Código-fonte 
                    <ExternalLinkIcon mx='2px' />
                  </Button>
              </Flex>
            </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default Projects;
