import {
  Stack,
} from '@chakra-ui/react';
import HeroImage from '../components/Hero-image';
import HeroText from '../components/Hero-text';

const Hero = () => {
  return (
    <Stack
    as='main'
    >
      <Stack
        as='section'
        alignItems='center'
        direction={{ base: 'column-reverse', md: 'row' }}
        w='full'
        spacing={12}
      >
          <HeroText/>
          <HeroImage />
      </Stack>
    </Stack>
  );
};

export default Hero;
