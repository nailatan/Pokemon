import react from "react";
import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

const Ability = ({ name }) => {
  return (
    <div
      style={{
        background: "#EF476F",
        color: "white",
        textAlign: "center",
        verticalAlign: "center",
        margin: "0.2rem",
        padding: ".3rem",
        borderRadius: "20px",
      }}
    >
      {name}
    </div>
  );
};

export default Ability;
