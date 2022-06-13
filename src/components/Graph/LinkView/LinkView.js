import React, { useContext, useEffect, useState } from "react";
import { ConceptContext } from "../../../Context/ConceptContext";
import "./LinkView.css";

///////////////////////////////////////// Displays the selected Link /////////////////////////////////////////////////////
const LinkView = ({ link, setLink }) => {
  const { concepts, setConcepts } = useContext(ConceptContext);
  const source = concepts.find((element) => element.id === link.source.id);
  const target = concepts.find((element) => element.id === link.target.id);
  const [close, setClose] = useState(true);
  const [linkDelete, setLinkDelete] = useState(false);

  //updates the data and triggers redraw when a link is deleted

  const handleDeleteLink = () => {
    const newConcepts = [...concepts];
    newConcepts.forEach((concept, index) => {
      if (concept.id === source.id) {
        concept.relations = concept.relations.filter(
          (relation) => relation.concept.id !== target.id
        );
      }
      newConcepts[index] = concept;
    });
    setConcepts(newConcepts);
    setLinkDelete(true);
    setTimeout(() => {
      setLinkDelete(false);
      setLink(null);
    }, 2000);
  };
  useEffect(() => {
    setClose(true);
  }, [link]);
  if (linkDelete) {
    return (
      <div
        className="section-title"
        style={{ backgroundColor: "red", color: "white" }}
      >
        Link Deleted
      </div>
    );
  } else if (close && link != null) {
    return (
      <div id="linkView">
        <p className="section-title"> Link view </p>
        <div className="link__container">
          <div className="link__source">
            <h5 className="link__title">Source:</h5>
            <p className="link__title-item">
              <strong>Name : </strong> {source.name}
            </p>
            <p className="link__title-item">
              <strong>Semantic Class : </strong> {source.semanticClass}
            </p>
          </div>

          <div className="link__target">
            <h5 className="link__title">Target:</h5>
            <p className="link__title-item">
              <strong>Name : </strong> {target.name}
            </p>
            <p className="link__title-item">
              <strong>Semantic Class : </strong> {target.semanticClass}
            </p>
          </div>
        </div>
        <div className="button-container">
          <button
            className="mybtn delete-btn link-btn"
            onClick={() => {
              handleDeleteLink();
            }}
          >
            Delete Link
          </button>
          <button
            className="mybtn"
            onClick={() => {
              setClose(!close);
            }}
          >
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return <div className="section-title">select a link to view</div>;
  }
};

export default LinkView;
