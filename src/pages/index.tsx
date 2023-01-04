import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Container } from '../../styles/home';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import HeroText from '../components/HeroText';
import Project from '../components/Project';
import Social from '../components/Social';
import { Data } from './api/getData';

const Hero = ({projects}:  InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
    <Head>
    <title>Juan</title>
    </Head>
    <main>
        <section className='hero'>
          <HeroText />
          <HeroImage />
        </section>
        <div className="divider"></div>
        {projects.map((e)=> (
          <Project
          name={e.name}
          description={e.description}
          image={e.image}
          link={e.link}
          tech={e.tech}
          key={e.name}
          isFinished={e.isFinished}
          />
        ))}

        <Footer />
      </main> 
      </Container>
  );
};

export default Hero;

export const getStaticProps = async () => {
  
  const res = await fetch(`${process.env.REACT_APP_ENVIROMENT}/api/getData`)
   const projects: Data[] = await res.json()
   return{
     props:{
      projects,
      fallback: false
     }
   }
   
 }