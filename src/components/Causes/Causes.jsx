import "./Causes.scss";

function Causes({ handleClick }) {
  return (
    <>
      <div className="causes-button__container-top">
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("animals")}
          >
            Animals
          </button>
          <div className="tooltip-text">Try searching: cats, dogs</div>
        </div>
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("environment")}
          >
            Environment
          </button>
          <div className="tooltip-text">
            Try searching: climate, conservation
          </div>
        </div>
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("education")}
          >
            Education
          </button>
          <div className="tooltip-text">Filter by tags:...</div>
        </div>
      </div>
      <div className="causes-button__container-bottom">
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("justice")}
          >
            Justice
          </button>
          <div className="tooltip-text">Filter by tags:...</div>
        </div>
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("religion")}
          >
            Religion
          </button>
          <div className="tooltip-text">Filter by tags:...</div>
        </div>
        <div className="button-tooltip__container">
          <button
            className="causes-button"
            onClick={() => handleClick("culture")}
          >
            Culture
          </button>
          <div className="tooltip-text">Filter by tags:...</div>
        </div>
      </div>
    </>
  );
}

export default Causes;
