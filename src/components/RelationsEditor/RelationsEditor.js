import React, { useState, useContext, useEffect } from "react";
import "./RelationsEditor.css";
import { ConceptContext } from "../../../src/Context/ConceptContext";
import AddRelations from "./AddRelations";
import UpdateRelations from "./UpdateRelations";

const RelationsEditor = ({ conceptData, selectedIndex }) => {
  const { concepts, setConcepts } = useContext(ConceptContext);
  const [newConcepts, setNewConcepts] = useState([]);
  const [relationList, setRelationList] = useState(conceptData.relations);

  const updateRelations = () => {
    newConcepts[selectedIndex].relations = [...relationList];
    setConcepts([...newConcepts]);
  };

  useEffect(() => {
    setNewConcepts(concepts);
  }, []);
  useEffect(() => {
    setRelationList(conceptData.relations);
  }, [conceptData]);
  useEffect(() => {}, [relationList]);
  return (
    <div>
      <h5>Relations:</h5>
      {relationList.map((relation, index) => {
        return (
          <UpdateRelations
            relationIndex={index}
            relation={relation}
            relationList={relationList}
            setRelationList={setRelationList}
          />
        );
      })}

      <AddRelations
        relationList={relationList}
        setRelationList={setRelationList}
      />
      <button
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
