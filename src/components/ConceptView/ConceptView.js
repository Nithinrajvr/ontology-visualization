import React, { useState } from "react";
import ConceptEditor from "../ConceptEditor/ConceptEditor";
import "./ConceptView.css";

const ConceptView = ({ conceptData }) => {
  const [edit, setEdit] = useState(false);
  console.log(conceptData);
  if (conceptData === null) {
    return <div>No node Selected</div>;
  } else {
    return (
      <div className="concept-container">
        <div className="concept-info">
          <h1>Name: {conceptData.name}</h1>
          <p>Is Orthogonal : {conceptData.isOrtho.toString()}</p>
          <p>ID : {conceptData.id}</p>
          <p>Semantic Class : {conceptData.semanticClass}</p>
          <h5>Tags :</h5>
          {conceptData.tags.map((tag) => {
            return (
              <>
                <p>{tag.id}</p>
                <p>{tag.name}</p>
              </>
            );
          })}
          {conceptData.relations.map((relation, index) => {
            return (
              <div>
                <h5>Relation {index + 1}</h5>
                <p>Relation Name : {relation.name}</p>
                <p>Relation Concept : {relation.concept.name}</p>
              </div>
            );
          })}
          <div className="button-container">
            <button className="mybtn" onClick={() => setEdit(!edit)}>
              Edit Node
            </button>
          </div>
        </div>
        {edit ? (
          <div className="concept-editor">
            <ConceptEditor conceptData={conceptData} />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default ConceptView;
