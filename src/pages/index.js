import React, { useState, useEffect } from "react";
import michaelPic from "../images/michael.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const IndexPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleShowMenu = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {}, [isClicked]);

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
    show: { opacity: 1, x: 0, ease: "easeInOut" },
  };
  const menu = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 50, ease: "easeInOut" },
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
    <div className="landing-div" onClick={handleShowMenu}>
      <motion.img
        variants={img}
        initial="hidden"
        animate="show"
        src={michaelPic}
        alt="Michael's profile picture"
        className="cover-img"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-text "
      >
        {!isClicked ? (
          ""
        ) : (
          <FontAwesomeIcon icon={faArrowDown} className="animate-bounce" />
        )}
        {!isClicked ? (
          <motion.h1 variants={item} className="menu-h1  ">
            HELLO.
          </motion.h1>
        ) : (
          <Link to="/about">
            <motion.h1 variants={menu} className="menu-h1">
              ABOUT
            </motion.h1>
          </Link>
        )}
        {!isClicked ? (
          <motion.h1 variants={item} className="menu-h1 text-secondary">
            I am
          </motion.h1>
        ) : (
          <Link to="/resume">
            <motion.h1 variants={menu} className="menu-h1 text-secondary">
              RESUME
            </motion.h1>
          </Link>
        )}
        {!isClicked ? (
          <motion.h1 variants={item} className="menu-h1  ">
            Michael
          </motion.h1>
        ) : (
          <Link to="/work" variants={menu} className="menu-h1 text-secondary">
            <motion.h1 variants={menu} className="menu-h1 text-secondary">
              WORK
            </motion.h1>
          </Link>
        )}
        {!isClicked ? (
          <motion.h2 variants={item} className="menu-h2">
            Front-End developer
          </motion.h2>
        ) : (
          <Link to="/blog">
            <motion.h1 variants={menu} className="menu-h2">
              Blog
            </motion.h1>
          </Link>
        )}
      </motion.div>
      <motion.div className="click-anywhere-btn-div">
        <FontAwesomeIcon icon={faFingerprint} size="2x" />
        <h2>Click anywhere</h2>
      </motion.div>
    </div>
  );
};

export default IndexPage;