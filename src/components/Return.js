import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Return = () => {
  return (
    <Link to="/">
      <FontAwesomeIcon
        icon={faAnglesLeft}
        size="2x"
        className="text-secondary animate-bounce fixed top-4 left-4 cursor-pointer"
      />
    </Link>
  );
};

export default Return;
