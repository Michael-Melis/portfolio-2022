import React from "react";
import Return from "../components/Return";

const About = () => {
  return (
    <div className=" resume-container mx-4 md:mx-36 lg:mx-56 lg:items-start">
      <Return />
      <title>About</title>
      <div className="resume-section">
        <h1 className="resume-h1 ">ABOUT</h1>
        <h2 className="about-h2">
          Hey my name is <span className="about-span">Michael Melis</span>{" "}
          borned in <span className="about-span">Opava, Czechia</span>. I am
          currently based in{" "}
          <span className="about-span">Liptovsky Mikulas, Slovakia</span>.
        </h2>
      </div>
      <div className="resume-section">
        <h2 className="about-h2">
          <span className="about-span">Frontend developer</span> with passion
          for learning new things.
        </h2>

        <h2 className="about-h2">
          I have one year experience in Frontend, firm knowledge of HTML,CSS and
          JavaScript language.
        </h2>
        <h2 className="about-h2">
          I consider myself as a <span className="about-span">TEAM</span>{" "}
          oriented and <span className="about-span">STRONG</span> individual
          waiting for the{" "}
          <span className="about-span animate-pulse">
            CHANCE TO PROVE MYSELF
          </span>
          .
        </h2>
      </div>

      <div>
        <h2 className="about-h2">
          In my free time you can find me MTBiking, hiking or dronning in our
          beautiful Slovak nature.
        </h2>
      </div>
    </div>
  );
};

export default About;
