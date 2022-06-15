import React, { useState, useContext, useEffect } from "react";
import "./RelationsEditor.css";
import { ConceptContext } from "../../../Context/ConceptContext";
import AddRelations from "../AddRelations/AddRelations";
import UpdateRelations from "../UpdateRelations/UpdateRelations";

//Relations Editor is used to update the relations of a concept

const RelationsEditor = ({ conceptData, selectedIndex }) => {
  const { concepts, setConcepts } = useContext(ConceptContext);
  const [newConcepts, setNewConcepts] = useState([]);
  const [relationList, setRelationList] = useState(conceptData.relations);
  const [isUpdated, setIsUpdated] = useState(false);

  //updating concepts in the global context after editing a concept

  const updateRelations = () => {
    setIsUpdated(true);
    newConcepts[selectedIndex].relations = [...relationList];
    setConcepts([...newConcepts]);
    setTimeout(() => {
      setIsUpdated(false);
    }, 2000);
  };

  // Re -rendering the component after adding editing a relation

  useEffect(() => {
    setNewConcepts(concepts);
    setRelationList(conceptData.relations);
  }, [conceptData]);
  useEffect(() => {}, [relationList]);
  return (
    <div className="relations__form form">
      <h5 className="relation__form-title form-title">Relations:</h5>
      {relationList.map((relation, index) => {
        return (
          // component for updating the relations of a concept passes in the conceptData,
          // the selectedIndex, and the index of the relation
          <UpdateRelations
            key={index}
            relationIndex={index}
            relation={relation}
            relationList={relationList}
            setRelationList={setRelationList}
          />
        );
      })}
      {/* component for adding a new relation to a concept */}
      <AddRelations
        relationList={relationList}
        setRelationList={setRelationList}
      />
      {isUpdated ? (
        <div
          className="section-title"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Relation Updated successfully
        </div>
      ) : (
        <></>
      )}
      <button
        className="form-submit-btn"
        id="relations-submit-btn"
        onClick={() => {
          updateRelations();
        }}
      >
        Update Relations
      </button>
    </div>
  );
};

export default RelationsEditor;
