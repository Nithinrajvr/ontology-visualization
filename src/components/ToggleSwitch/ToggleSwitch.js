import React from "react";
import "./ToggleSwitch.css";

///////////////////////////////////////////  Toggle Switch for Graph type ///////////////////////////////////////////////////

const ToggleSwitch = ({ label, graphType, setGraphType }) => {
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onClick={() => setGraphType(!graphType)}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
