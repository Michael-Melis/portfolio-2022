import React from 'react';
import Return from '../components/Return';
import WorkExample from '../components/WorkExample';
import mainTic from '../images/tictactoe/mainTic.png';
import multyTic from '../images/tictactoe/multyTic.png';
import singleTic from '../images/tictactoe/singleTic.png';
import pokemonMain from '../images/pokemon/pokemonMain.png';
import pokemonSecond from '../images/pokemon/pokemonSecond.png';
import pokemonThird from '../images/pokemon/pokemonThird.png';
import figmaMain from '../images/figmaTemplate/figmaMain.png';
import figmaSecond from '../images/figmaTemplate/figmaSecond.png';
import figmaThird from '../images/figmaTemplate/figmaThird.png';
import { motion } from 'framer-motion';

const Work = () => {
  const pokemonArr = [pokemonMain, pokemonThird, pokemonSecond];
  const ticArr = [mainTic, multyTic, singleTic];
  const figmaArr = [figmaMain, figmaThird, figmaSecond];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, ease: 'easeInOut' },
  };
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className=' resume-container mx-4 md:mx-36 lg:mx-80 lg:items-start'>
      <Return />
      <title>Work</title>

      <motion.div variants={item} className='resume-section'>
        <h1 className='resume-h1'>WORK</h1>
        <h2 className='about-h2'>
          I do not have a lot of experience at the moment but I still have my
          work to show.
        </h2>
      </motion.div>
      <motion.div variants={item}>
        <WorkExample
          link='https://github.com/Michael-Melis/project-tic-tac'
          name='Tic-Tac-Toe'
          about='Classic tic-tac-toe game, I used React JS, Tailwind CSS, React Router Dom. Hit the link below to see the code.'
          picArr={ticArr}
          url='https://michael-tic-tac-toe.netlify.app/'
        />
      </motion.div>
      <motion.div variants={item}>
        <WorkExample
          link='https://github.com/Michael-Melis/pokemon-catch-them-all'
          name='Pokemon-Catch-Them-All'
          about='This web-App is using free to use Pokemon V2 API, dynamic routing, axios and Recoil JS as a state managment tool.You are able to filter pokemons by type and select exact pokemons to see their info and details.'
          picArr={pokemonArr}
          url='https://pokemon-catch-them-all.netlify.app/'
        />
      </motion.div>
      <motion.div variants={item}>
        <WorkExample
          link='https://github.com/Michael-Melis/figma-test-project'
          name='Figma template 1:1'
          about="Idea of this project is to present my skills that I can bring your figma project to live in 1:1 ratio. I dont accept 'no' as an answer."
          picArr={figmaArr}
          url='https://one-to-one.netlify.app/'
        />
      </motion.div>
    </motion.div>
  );
};

export default Work;
