import React from "react";

const SkillLevel = ({ skill }) => {
  return (
    <div>
      <h4
        style={{
          background: `-webkit-linear-gradient(left, #00cda1 ${skill}%, white 0%)`,
        }}
        className="text-center text-black text-xl my-2 rounded-3xl p-1 "
      >
        {skill}%
      </h4>
    </div>
  );
};

export default SkillLevel;
