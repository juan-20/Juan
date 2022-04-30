import { ChevronDownIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Switch, useDisclosure, Img, AspectRatio } from '@chakra-ui/react'
import type { NextPage } from 'next'
import  me from '../../public/Iconeanimado-Juan.gif'
import React from 'react'
import Image from 'next/image'
import style from '../../styles/main.module.scss'

const Home: NextPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    <nav>
      <Container
      maxW='100%' bg='blue.600' color='white'>
      <Menu>
      <Flex>
        <Center>
        <Heading size='md'>Juan</Heading>
        </Center>
      <Spacer />
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          onClick={onOpen}
        />
      </Flex>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
            <Link>
            Quem sou
            </Link>
            <br/>
            <Link>
            Projetos
            </Link>
            <br/>
            <Link>
            Quem sou
            </Link>
            </DrawerBody>

            <DrawerFooter>
            <Link href='' isExternal>
              Código-fonte <ExternalLinkIcon mx='2px' />
            </Link>
            </DrawerFooter>

          </DrawerContent>
        </Drawer>
  
  </Menu>
      </Container>
    </nav>
    <section className='whoiam'>
      <Container
       maxW='100%' size='md'
       bg='purple.600' color='white'>
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box
        maxW='100%'
        p='2'>
          {/* <AspectRatio ratio={4 / 3}> */}
          <Image className={style.gif}
           src={me}
           width={400}
           height={400}
           layout='intrinsic'
           />
           {/* </AspectRatio> */}
        </Box>
        {/* <Spacer /> */}
        <Box  >
          <Center>
            <Center>
        <Heading size='md'>Quem sou .</Heading>
        </Center>
        </Center>
        </Box>
      </Flex>
      </Container>
    </section>
    </>
  )
}

export default Home