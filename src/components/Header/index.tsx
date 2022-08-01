import { ChevronDownIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Switch, useDisclosure, Img, AspectRatio, ButtonGroup } from '@chakra-ui/react'
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
        />
      </Flex>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody>
            <Box p='2'>
                
                  <p>Mudar o tema:</p>
                <Switch 
                size='md' 
                onChange={toggleTheme} checked={title === 'dark'}
                />
                
                </Box>
            </DrawerBody>

            <DrawerFooter>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
               

                <Spacer />
                <ButtonGroup gap='2'>
                <Link className='link' href='https://github.com/juan-20/Juan' isExternal>
                  Código-fonte <ExternalLinkIcon mx='2px' />
                </Link>
                </ButtonGroup>
            </Flex>
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