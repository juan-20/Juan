import {
  Divider,
  Stack,
} from '@chakra-ui/react';
import Projects from '../components/Projects';
import HeroImage from '../components/Hero-image';
import HeroText from '../components/Hero-text';
import Footer from '../components/Footer';
import Head from 'next/head';

const Hero = () => {
  return (
    <>
    <Head>
    <title>Juan</title>
    </Head>
    <Stack
      as='main'
    >
        <Stack
          as='section'
          alignItems='center'
          direction={{ base: 'column-reverse', md: 'row' }}
          spacing={12}
        >
          <HeroText />
          <HeroImage />
        </Stack>
        <Divider />
        <Projects />

        <Footer />
      </Stack> 
      </>
  );
};

export default Hero;
