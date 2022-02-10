import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { StaticImage } from "gatsby-plugin-image";

const WorkExample = ({ name, about, link, picArr }) => {
  return (
    <div className="work-example-container">
      <div className="">
        <h2 className="work-example-h2 ">{name}</h2>
        <p className="work-example-p">{about}</p>
        <div className="work-example-github">
          <FontAwesomeIcon icon={faGithub} />
          <a href={link} target="_blank" rel="noreferrer">
            /{name}
          </a>
        </div>
      </div>
      <div className="lg:flex lg:flex-wrap lg:justify-center">
        {picArr.map((image, i) => (
          <img className="work-example-img" key={i} src={image} alt="lala" />
        ))}
      </div>
    </div>
  );
};

export default WorkExample;
