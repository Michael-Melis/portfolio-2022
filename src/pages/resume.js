import React from 'react';
import Return from '../components/Return';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Resume = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      className='resume-container '>
      <title>Resume</title>
      <Return />
      <div className=' lg:flex lg:justify-evenly lg:w-screen'>
        <div>
          <motion.div variants={item} className='resume-section'>
            <h1 className='resume-h1'>EDUCATION</h1>
            <h3 className='resume-h3'>2007-2011</h3>
            <h3 className='resume-h3'>GRAMMAR SCHOOL</h3>
            <h3 className='resume-h3'>in Liptovsky Mikulas, Slovakia</h3>
          </motion.div>
          <motion.div variants={item} className='resume-section'>
            <h1 className='resume-h1'>LANGUAGES</h1>
            <h3 className='resume-h3'>SLOVAK</h3>

            <h3 className='resume-h3'>CZECH</h3>

            <h3 className='resume-h3'>ENGLISH</h3>
          </motion.div>

          <motion.div variants={item} className='resume-section '>
            <h1 className='resume-h1'>WORK EXPERIENCE</h1>
            <h2 className='resume-h2'>ReactJS Front-end developer</h2>

            <h2 className='text-xl'>March 2022 - Present</h2>
            <h2 className='text-xl'>AgeVolt Slovakia s.r.o.</h2>

            <h2 className='resume-h2'>AMAZON ASSOCIATE</h2>
            <h3 className='text-xl'>AUG 2020-AUG 2021</h3>
            <h3 className='text-xl'>AMAZON, MANCHESTER, UK </h3>
          </motion.div>
          <motion.div variants={item} className='flex flex-col text-start '>
            <motion.h1 className=' resume-h1'>DESIGN SKILLS</motion.h1>
            <motion.div>
              <h3 className='resume-h3'>FIGMA</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>CANVA</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>ADOBE PHOTOSHOP</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>ADOBE ILLUSTRATOR</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>ADOBE LIGHTROOM</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>ADOBE PHOTOSHOP</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>ADOBE PREMIERE PRO</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>FINAL CUT PRO</h3>
            </motion.div>{' '}
          </motion.div>
        </div>
        <div className='flex flex-col text-start '>
          <motion.div variants={item} className='flex flex-col text-start '>
            <motion.h1 className=' resume-h1 '>FRONTEND SKILLS</motion.h1>
            <motion.div>
              <h3 className='text-xl'>Programming languages:</h3>
              <h3 className='resume-h3 '>JAVASCRIPT / TYPESCRIPT</h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>FE libraries:</h3>
              <h3 className='resume-h3'>REACT JS / VUE JS</h3>
              <h3 className='resume-h3'>NEXT JS / GATSBY JS</h3>
            </motion.div>

            <motion.div>
              <h3 className='text-xl'>State management:</h3>
              <h3 className='resume-h3'>REDUX / REDUX TOOLKIT</h3>
              <h3 className='resume-h3'>RECOIL JS</h3>
              <h3 className='resume-h3'>REACT CONTEXT</h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>Data fetching:</h3>
              <h3 className='resume-h3'>RTK QUERY</h3>
              <h3 className='resume-h3'>REACT QUERY</h3>
              <h3 className='resume-h3'>AXIOS</h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>NPM LIBS:</h3>
              <h3 className='resume-h3'>REACT-ROUTER-DOM</h3>
              <h3 className='resume-h3'>REACT-HOOK-FORM / FORMIK / YUP</h3>
              <h3 className='resume-h3'>I18NEXT</h3>
              <h3 className='resume-h3'>FONT-AWESOME</h3>
              <h3 className='resume-h3'>...</h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>Version control:</h3>
              <h3 className='resume-h3'>GIT</h3>
              <h3 className='resume-h3'>GITHUB</h3>
              <h3 className='resume-h3'>GITLAB</h3>
              <h3 className='resume-h3'>BITBUCKET</h3>
            </motion.div>
          </motion.div>
          <motion.div variants={item} className='flex flex-col text-start '>
            <motion.h1 className=' resume-h1'>STYLING</motion.h1>

            <motion.div>
              <h3 className='text-xl'>Component libraries:</h3>
              <h3 className='resume-h3'>
                MATERIAL UI / BOOTSTRAP / REACTSTRAP / ANT DESIGN / CHAKRA UI
              </h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>Styles:</h3>
              <h3 className='resume-h3'>
                TAILWIND CSS / CSS3 / SASS / CSS MODULES
              </h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>
                <h3 className='text-xl'>Charts:</h3>
                CHART JS / APEXCHARTS
              </h3>
            </motion.div>
            <motion.div>
              <h3 className='text-xl'>Animations:</h3>
              <h3 className='resume-h3'>FRAMER MOTION / ANIMATE</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>STYLED COMPONENTS</h3>
            </motion.div>
            <motion.div>
              <h3 className='resume-h3'>RESPONSIVE DESIGN</h3>
            </motion.div>
          </motion.div>{' '}
        </div>
      </div>

      <motion.div variants={item} className='resume-gihub-container '>
        <h1 className='resume-h1  '>MY CODE</h1>
        <div>
          <FontAwesomeIcon
            icon={faGitlab}
            size='2x'
            className='text-secondary mr-4 lg:text-2xl '
          />
          <a
            href='https://gitlab.com/Michael_Melis'
            target='_blank'
            rel='noreferrer'
            className=' ml-4 lg:text-2xl lg:hover:text-secondary '>
            /Michael-Melis
          </a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faGithub}
            size='2x'
            className='text-secondary mr-4 lg:text-2xl '
          />
          <a
            href='https://github.com/Michael-Melis'
            target='_blank'
            rel='noreferrer'
            className=' ml-4 lg:text-2xl lg:hover:text-secondary '>
            /Michael-Melis
          </a>{' '}
        </div>{' '}
      </motion.div>
    </motion.div>
  );
};

export default Resume;
