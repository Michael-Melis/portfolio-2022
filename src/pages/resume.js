import React from "react";
import Return from "../components/Return";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillLevel from "../components/SkillLevel";
import { motion } from "framer-motion";

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
    show: { opacity: 1, x: 0, ease: "easeInOut" },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="resume-container "
    >
      <Return />
      <div className=" lg:flex lg:justify-evenly lg:w-screen">
        <div>
          <motion.div variants={item} className="resume-section">
            <h1 className="resume-h1">EDUCATION</h1>
            <h3 className="resume-h3">2007-2011</h3>
            <h3 className="resume-h3">GRAMMAR SCHOOL</h3>
            <h3 className="resume-h3">in Liptovsky Mikulas, Slovakia</h3>
          </motion.div>
          <motion.div variants={item} className="resume-section">
            <h1 className="resume-h1">LANGUAGES</h1>
            <h3 className="resume-h3">SLOVAK</h3>

            <h3 className="resume-h3">CZECH</h3>

            <h3 className="resume-h3">ENGLISH</h3>
          </motion.div>
          <motion.div variants={item} className="resume-section">
            <h1 className="resume-h1">WORK EXPERIENCE</h1>
            <h2 className="resume-h2">AMAZON ASSOCIATE</h2>
            <h3 className="resume-h3">AUG 2020-AUG 2021</h3>
            <h3 className="resume-h3">AMAZON, MANCHESTER, UK </h3>
            <h2 className="resume-h2">BAR SUPERVISOR</h2>
            <h3 className="resume-h3">DEC 2015 - AUG 2020</h3>
            <h3 className="resume-h3">
              BRITANNIA COUNTRY HOUSE HOTEL,
              <br /> MANCHESTER, UK
            </h3>
          </motion.div>

          <motion.h1 variants={item} className=" resume-h1">
            FRONTEND SKILLS
          </motion.h1>
          <motion.div variants={item}>
            <h3 className="resume-h3">JAVASCRIPT</h3>
            <SkillLevel variants={item} skill={75} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">HTML</h3>
            <SkillLevel skill={90} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">REACT JS</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">VUE</h3>
            <SkillLevel skill={50} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">GATSBY</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">NEXT JS</h3>
            <SkillLevel skill={60} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">RECOIL JS</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">GIT/VERSION CONTROL</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">GITHUB</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">JQUERY</h3>
            <SkillLevel skill={50} />
          </motion.div>
        </div>
        <div className="flex flex-col text-center ">
          <motion.h1 variants={item} className=" resume-h1">
            STYLING
          </motion.h1>
          <motion.div variants={item}>
            <h3 className="resume-h3">STYLED COMPONENTS</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">MATERIAL UI</h3>
            <SkillLevel skill={70} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ANT DESIGN</h3>
            <SkillLevel skill={70} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">TAILWIND CSS</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">CSS3</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">RESPONSIVE DESIGN</h3>
            <SkillLevel skill={90} />
          </motion.div>

          <motion.h1 variants={item} className=" resume-h1">
            DESIGN SKILLS
          </motion.h1>
          <motion.div variants={item}>
            <h3 className="resume-h3">FIGMA</h3>
            <SkillLevel skill={70} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">CANVA</h3>
            <SkillLevel skill={70} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ADOBE PHOTOSHOP</h3>
            <SkillLevel skill={60} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ADOBE ILLUSTRATOR</h3>
            <SkillLevel skill={60} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ADOBE LIGHTROOM</h3>
            <SkillLevel skill={80} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ADOBE PHOTOSHOP</h3>
            <SkillLevel skill={60} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">ADOBE PREMIERE PRO</h3>
            <SkillLevel skill={90} />
          </motion.div>
          <motion.div variants={item}>
            <h3 className="resume-h3">FINAL CUT PRO</h3>
            <SkillLevel skill={90} />
          </motion.div>
        </div>
      </div>

      <motion.div variants={item} className="resume-gihub-container ">
        <h1 className="resume-h1  ">MY CODE</h1>
        <div>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className="text-secondary mr-4 lg:text-2xl "
          />
          <a
            href="https://github.com/Michael-Melis"
            target="_blank"
            rel="noreferrer"
            className=" ml-4 lg:text-2xl lg:hover:text-secondary "
          >
            /Michael-Melis
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
