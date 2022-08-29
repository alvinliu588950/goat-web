import React from "react";
import { useParams } from "react-router-dom";

const Agent = () => {
  let { name } = useParams();

  const Agentname = [
    { name: "bucharati", text: "Sting Finger" },
    { name: "mista", text: "Sex Pistols" },
    { name: "dio", text: "The World" },
    { name: "jojo", text: "Star Platinum" },
  ];
  return (
    <>
      {name === "bucharati" && (
        <h1>
          {Agentname[0].text} is the name of your stand, Bucharati!
        </h1>
      )}
        {name === "mista" && (
        <h1>
          {Agentname[1].text} is the name of your stand, Mista!
        </h1>
      )}
        {name === "dio" && (
        <h1>
          {Agentname[2].text} is the name of your stand, Dio!
        </h1>
      )}
        {name === "jojo" && (
        <h1>
          {Agentname[3].text} is the name of your stand, Jojo!
        </h1>
      )}
    </>
  );
};

export default Agent;
