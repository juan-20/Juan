import { ChevronDownIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Switch, useDisclosure, Img, AspectRatio } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { title } from 'process';
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';

interface props {
  toggleTheme(): void;
}


const Header: NextPage<props> = ({ toggleTheme }) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  const { colors, title } = useContext(ThemeContext)

  return (
    <>
    <nav >
      <Container
      maxW='100%' color='white'>
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
          transition='all 0.2s'
          _focus={{ boxShadow: 'outline' }}
          colorScheme='yellow'
          _hover={{ bg: 'gray.900', color: '#FBB642' }}
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
            <Switch 
            size='lg' 
            onChange={toggleTheme} checked={title === 'dark'}
            bg={colors.secondary}
             />
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