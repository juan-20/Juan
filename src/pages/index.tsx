import {
  Divider,
  Stack,
} from '@chakra-ui/react';
import Projects from '../components/Projects';
import HeroImage from '../components/Hero-image';
import HeroText from '../components/Hero-text';
import Footer from '../components/Footer';

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
          <Divider />
          <Projects/>

          <Footer/>
    </Stack>
  );
};

export default Hero;
