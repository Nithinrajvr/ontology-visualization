import React from "react";
import "./Instructions.css";
import { CgClose } from "react-icons/cg";
import { headings, instructions } from "../../data/instructions";
import GRAPH from "../../assets/graph.JPG";
import GRAPH3D from "../../assets/graph2.JPG";
import HOVER from "../../assets/hover.JPG";
import ADDNODE from "../../assets/addNode.JPG";
import ADDNODE2 from "../../assets/addnode2.JPG";
import NPREV from "../../assets/nodePreview.JPG";
import LPREV from "../../assets/LinkPreview.JPG";
import CEDIT from "../../assets/ConceptEditor.JPG";
import REDIT from "../../assets/relationsEditor.JPG";

const Instructions = ({ setInstructions }) => {
  const images = [
    GRAPH,
    GRAPH3D,
    HOVER,
    ADDNODE,
    ADDNODE2,
    NPREV,
    LPREV,
    CEDIT,
    REDIT,
  ];
  return (
    <div className="instructions__popup">
      <div className="instructions__content">
        <div className="instructions__header">
          <h3 className="instructions__header-title">Instructions</h3>
          <button
            className="instructions__button-close"
            onClick={() => setInstructions(false)}
          >
            <CgClose />
          </button>
        </div>
        <div className="instructions__body">
          {images.map((image, index) => {
            return (
              <div className="instructions__item" key={index}>
                <div className="instructions__info">
                  <h4 className="instructions__heading title">
                    {headings[index]}
                  </h4>
                  <p className="instructions__text">{instructions[index]}</p>
                </div>
                <div className="instructions__image">
                  <img src={image} alt="graph" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
