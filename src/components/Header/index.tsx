import { ChevronDownIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Switch, useDisclosure, Img, AspectRatio } from '@chakra-ui/react'
import type { NextPage } from 'next'
// import  me from '../../public/Iconeanimado-Juan.gif'
import React from 'react'
import Image from 'next/image'
import style from '../../styles/main.module.scss'

const Header: NextPage = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  const navStyle = {
    width: '100%',
  }

  return (
    <>
    <nav style={ navStyle }>
      <Container
      maxW='100%' bg='yellow.400' color='white'>
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
    </>
  )
}

export default Header