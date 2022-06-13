import React, { useState, useContext } from "react";
import ConceptEditor from "../ConceptEditor/ConceptEditor";
import "./ConceptView.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConceptContext } from "../../Context/ConceptContext";

//component displays and edit the concept details

const ConceptView = ({ conceptData, selectedIndex, setSelectedConcept }) => {
  const [edit, setEdit] = useState(false);
  const [nodeDelete, setNodeDelete] = useState(false);
  const { concepts, setConcepts } = useContext(ConceptContext);
  const handleDelete = () => {
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
    setConcepts(newConcepts);
    setNodeDelete(true);
    setTimeout(() => {
      setNodeDelete(false);
      setSelectedConcept(null);
    }, 2000);
  };
  if (conceptData === null) {
    return (
      <div className="section-title">
        Select a node or link to display details
      </div>
    );
  } else if (nodeDelete) {
    return (
      <div
        className="section-title"
        style={{ backgroundColor: "red", color: "white" }}
      >
        Node Deleted
      </div>
    );
  } else {
    return (
      <>
        <div className="section-title">Concept details</div>
        <div className="concept__container" id="conceptView">
          <div className="concept__info">
            <div className="concept__item">
              <h5 className="concept__item-title">Concept</h5>
              <p>
                <strong>Name: </strong>
                {conceptData.name}
              </p>
              <p>
                <strong>Is Orthogonal</strong> :{" "}
                {conceptData.isOrtho.toString()}
              </p>
              <p>
                <strong>ID </strong>: {conceptData.id}
              </p>
              <p>
                <strong>Semantic Class </strong>: {conceptData.semanticClass}
              </p>
            </div>
            <div className="concept__item">
              <h5 className="concept__item-title">Tags :</h5>
              {conceptData.tags.map((tag, index) => {
                return (
                  <div key={index}>
                    <p>
                      <strong>Tag ID</strong> : {tag.id}
                    </p>
                    <p>
                      <strong>Tag name</strong> :{tag.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="concept__item">
              {conceptData.relations.map((relation, index) => {
                return (
                  <div key={index}>
                    <h5 className="concept__item-title">
                      Relation {index + 1}
                    </h5>
                    <p>
                      <strong> Relation Name</strong> : {relation.name}
                    </p>
                    <p>
                      <strong>Relation conept</strong> : {relation.concept.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="concept__button-container">
              <div className="link-button">
                <button className="mybtn" onClick={() => setEdit(!edit)}>
                  {edit ? "Close edit" : "Edit concept"}
                  <a className="button-link" href="#editor"></a>
                </button>
              </div>
              <button className="delete-btn" onClick={() => handleDelete()}>
                Delete Node
              </button>
            </div>
          </div>
          {edit ? (
            <div className="concept__editor">
              {/* Child component to edit concepts, the selected component is passed as props*/}
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
