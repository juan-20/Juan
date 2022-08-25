import { ChevronDownIcon, ExternalLinkIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Switch, useDisclosure, Img, AspectRatio, ButtonGroup, Button, TagRightIcon, TagLabel, Tooltip, Tag } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components';
import {GiBrazilFlag, GiUsaFlag} from 'react-icons/gi'
import Image from 'next/image'
import CustomToolTip from '../Tag';
import { SiNextdotjs } from 'react-icons/si';

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
                <Flex justifyContent='space-evenly' alignItems='center' p='2' >
                <p>Mudar o tema:</p>
                <Switch 
                size='md' 
                onChange={toggleTheme} checked={title === 'dark'}
                />
                </Flex>
                <Flex justifyContent='space-evenly' alignItems='center' p='2' >
                <p>Mudar idioma:</p>

                <Tooltip hasArrow label="Mudar idioma para português" aria-label='Mudar idioma para português'>
                <Button>
                <Image src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png'} width='20' height='20' />
                </Button>
                </Tooltip>

                <Tooltip hasArrow label="Change language to english" aria-label='Change language to english'>
                <Button>
                <Image src={'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png'} width='20' height='20' />
                </Button>
                </Tooltip>
                </Flex>
                <Flex justifyContent='center' alignItems='center' p='2' >
                <Link isExternal  href='https://plausible.io/juancho.vercel.app'
                      >
                        <Button
                          colorScheme="purple"
                          fontWeight="bold"
                          size="sm"
                        >
                        Analytics  
                        <ExternalLinkIcon mx='2px' />
                        </Button>
                        </Link>
          
                </Flex>
                
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