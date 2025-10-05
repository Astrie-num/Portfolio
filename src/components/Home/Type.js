import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Creative Problem Solver",
          "Human-Centered Coder",
          "Tech Explorer",
          "Digital Product Builder",
          "Community Mentor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;