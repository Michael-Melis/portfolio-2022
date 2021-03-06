import React, { useState, useEffect } from 'react';
import michaelPic from '../images/michael.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFingerprint,
  faHandPointer,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const IndexPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isShow, setIsShown] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  const isBrowser = () => typeof window !== 'undefined';

  const handleShowMenu = () => {
    setIsClicked(!isClicked);
  };

  const [screenSize, getDimension] = useState({
    dynamicWidth: isBrowser() && window.innerWidth,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: isBrowser() && window.innerWidth,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(isShow);
      setIsShown(true);
      console.log(isShow);
    }, 10000);
  }, []);

  useEffect(() => {
    isBrowser() && window.addEventListener('resize', setDimension);
    setIsMobile(screenSize.dynamicWidth < 1024 ? true : false);
    return () => {
      isBrowser() && window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, ease: 'easeInOut' },
  };
  const menu = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 50, ease: 'easeInOut' },
  };

  const img = {
    hidden: { opacity: 0 },
    show: {
      opacity: 0.5,
      transition: {
        duration: 2.3,
      },
    },
  };

  return (
    <div className='landing-div' onClick={handleShowMenu}>
      <motion.img
        variants={img}
        initial='hidden'
        animate='show'
        src={michaelPic}
        alt="Michael's profile picture"
        className='cover-img'
      />
      <title>Michael Melis</title>
      {isMobile ? (
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='container-text '>
          {!isClicked ? (
            <motion.h1 variants={item} className='menu-h1  '>
              HELLO.
            </motion.h1>
          ) : (
            <Link to='/about'>
              <motion.h1 variants={menu} className='menu-h1'>
                ABOUT
              </motion.h1>
            </Link>
          )}
          {!isClicked ? (
            <motion.h1 variants={item} className='menu-h1 text-secondary'>
              I am
            </motion.h1>
          ) : (
            <Link to='/resume'>
              <motion.h1 variants={menu} className='menu-h1 text-secondary'>
                RESUME
              </motion.h1>
            </Link>
          )}
          {!isClicked ? (
            <motion.h1 variants={item} className='menu-h1 text-secondary  '>
              Michael
            </motion.h1>
          ) : (
            <Link to='/work' variants={menu} className='menu-h1 text-secondary'>
              <motion.h1 variants={menu} className='menu-h1 text-secondary'>
                WORK
              </motion.h1>
            </Link>
          )}
          {!isClicked ? (
            <motion.h2 variants={item} className='menu-h2'>
              Front-End developer
            </motion.h2>
          ) : (
            <Link to='/blog'>
              <motion.h1 variants={menu} className='menu-h2'>
                Blog
              </motion.h1>
            </Link>
          )}
          {isClicked ? (
            ''
          ) : (
            <motion.div className='click-anywhere-btn-div text-sm'>
              <FontAwesomeIcon icon={faFingerprint} size='2x' />
              <h2>Tap anywhere</h2>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='container-text '>
          <Link to='/about'>
            <motion.h1
              variants={menu}
              className='menu-h1 menu '
              data-hover='About'
              data-active='Clicked'>
              <span> Hello.</span>
            </motion.h1>
          </Link>

          <Link to='/resume'>
            <motion.h1
              variants={menu}
              className='menu-h1 menu text-secondary'
              data-hover='Resume'
              data-active='Clicked'>
              <span> I am</span>
            </motion.h1>
          </Link>

          <Link
            to='/work'
            variants={menu}
            className='menu-h1 menu text-secondary'>
            <motion.h1
              variants={menu}
              className='menu-h1 menu text-secondary'
              data-hover='Work'
              data-active='Clicked'>
              <span> Michael</span>
            </motion.h1>
          </Link>

          <Link to='/blog'>
            <motion.h1
              variants={menu}
              className='menu-h2 menu'
              data-hover='Blog'
              data-active='Clicked'>
              <span> Frontend developer</span>
            </motion.h1>
          </Link>
          {isShow ? (
            <div className='lg:flex lg:flex-row hidden lg:text-xl lg:justify-center lg:items-center lg:relative lg:left-80 lg:-bottom-20 lg:animate-bounce'>
              <FontAwesomeIcon icon={faHandPointer} className='mr-8' />
              <p>Try to hover the content</p>
            </div>
          ) : (
            ''
          )}
        </motion.div>
      )}
    </div>
  );
};

export default IndexPage;
