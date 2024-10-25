import "./Causes.scss";

function Causes({ handleClick }) {
  return (
    <>
      <div className="causes-button__container-top">
        <button
          className="causes-button"
          onClick={() => handleClick("animals")}
        >
          Animals
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("environment")}
        >
          Environment
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("education")}
        >
          Education
        </button>
      </div>
      <div className="causes-button__container-bottom">
        <button
          className="causes-button"
          onClick={() => handleClick("justice")}
        >
          Justice
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("religion")}
        >
          Religion
        </button>
        <button
          className="causes-button"
          onClick={() => handleClick("culture")}
        >
          Culture
        </button>
      </div>
    </>
  );
}

export default Causes;
