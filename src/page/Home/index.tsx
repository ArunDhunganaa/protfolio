import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Marquee from './Marquee';
import Steps from './Steps';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Marquee></Marquee>
      <Marquee rotation={'reverse'}></Marquee>
      <Skill></Skill>
      <Project></Project>
      <Steps></Steps>
      <Experience></Experience>
    </>
  );
}
