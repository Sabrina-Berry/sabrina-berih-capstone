import "./Causes.scss";
import { useState } from "react";

function Causes({ handleClick }) {
  return (
    <>
      <div className="causes-button__container">
        <button
          className="causes-button"
          onClick={() => handleClick("animals")}
        >
          animals
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("environment")}
        >
          environment
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("education")}
        >
          education
        </button>
      </div>
    </>
  );
}

export default Causes;
