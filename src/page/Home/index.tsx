import Hero from './Hero';
import About from './About';
import Skill from './Skill';
import Project from './Project';
import Experience from './Experience';
import Comment from './Comment';
import Marquee from './Marquee';
import Steps from './Steps';

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Marquee></Marquee>
      <Skill></Skill>
      <Project></Project>
      <Steps></Steps>
      <Experience></Experience>
      <Comment></Comment>
    </>
  );
}
