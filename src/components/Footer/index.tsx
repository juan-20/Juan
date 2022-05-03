import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import VercelCallout from '../Powered-Vercel';


export default function Footer() {
  return (
    <Box>
       <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <VercelCallout/>
          </Stack>
        <Text>Feito com ❤️</Text>

        </Container>
    </Box>
  );
}