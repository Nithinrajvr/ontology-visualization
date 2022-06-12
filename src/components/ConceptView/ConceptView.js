import React, { useState, useContext } from "react";
import ConceptEditor from "../ConceptEditor/ConceptEditor";
import "./ConceptView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConceptContext } from "../../Context/ConceptContext";

const ConceptView = ({ conceptData, selectedIndex }) => {
  const [edit, setEdit] = useState(false);
  const { concepts, setConcepts } = useContext(ConceptContext);
  const handleDelete = () => {
    console.log("delete");
    let newConcepts = concepts.filter(
      (element) => element.id !== conceptData.id
    );
    newConcepts.forEach((element, index) => {
      const updatedRelations = element.relations.filter(
        (relation) => relation.concept.id !== conceptData.id
      );
      console.log(updatedRelations);
      newConcepts[index].relations = updatedRelations;
    });
    console.log(newConcepts);
    setConcepts(newConcepts);
  };
  if (conceptData === null) {
    return (
      <div className="section-title">
        Select a node or link to diplay details
      </div>
    );
  } else {
    return (
      <>
        <div className="section-title">Concept details</div>
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
                <div key={index}>
                  <h5>Relation {index + 1}</h5>
                  <p>Relation Name : {relation.name}</p>
                  <p>Relation Concept : {relation.concept.name}</p>
                </div>
              );
            })}
            <div className="button-container">
              <button className="mybtn" onClick={() => setEdit(!edit)}>
                Edit concept
              </button>
              <button className="mybtn" onClick={() => handleDelete()}>
                Delete Node
              </button>
            </div>
          </div>
          {edit ? (
            <div className="concept-editor">
              <ConceptEditor
                conceptData={conceptData}
                selectedIndex={selectedIndex}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }
};

export default ConceptView;
