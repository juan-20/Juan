import { PropsWithChildren } from 'react';
import { VStack, Container } from '@chakra-ui/react';

type Props = PropsWithChildren<{}>;

const Global = ({ children }: Props) => {
  return (
    <>
      <Container
        display="flex"
        maxW="container.md"
        minH={{ base: 'auto', md: '100vh' }}
        px={{ base: 4, lg: 0 }}
        centerContent
      >
        <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
          <VStack as="main" flex={1} w="full" spacing={16}>
            {children}
          </VStack>
        </VStack>
      </Container>
    </>
  );
};

export default Global;
