import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { ConceptContext } from "../../../src/Context/ConceptContext";

const AddRelations = ({ relations, setRelations }) => {
  const { concepts } = useContext(ConceptContext);
  const [newRelationConcept, setNewRelationConcept] = useState("");
  const [relationList, setRelationList] = useState([]);
  const [newRelationName, setNewRelationName] = useState("");
  const [selectedRelationName, setSelectedRelationName] =
    useState("Choose Relation");
  const handleRelation = (index, name) => {
    setNewRelationConcept(index);
    setSelectedRelationName(name);
  };
  const handleSubmit = () => {
    relationList.push({
      name: newRelationName,
      concept: {
        id: concepts[newRelationConcept].id,
        name: concepts[newRelationConcept].name,
        semanticClass: concepts[newRelationConcept].semanticClass,
      },
    });
    setRelations([...relationList]);
  };
  useEffect(() => {}, [relations]);
  return (
    <>
      <h6>Relations:</h6>
      {relationList?.map((relation, index) => {
        return (
          <div key={index}>
            <strong>Relation {index + 1}</strong>
            <p>Name: {relation.name}</p>
            <p>Concept: {relation.concept.name}</p>
          </div>
        );
      })}

      <div className="form-group">
        <label htmlFor="relationName">Relations Name: </label>
        <input
          type="text"
          id="relationName"
          placeholder="Name"
          value={newRelationName}
          onChange={(e) => setNewRelationName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="conceptName">Concept: </label>
        <DropdownButton id="dropdown-basic-button" title={selectedRelationName}>
          {concepts?.map((item, index) => {
            return (
              <Dropdown.Item
                href={`#/action-${index + 1}`}
                key={index}
                onClick={() => {
                  handleRelation(index, item.name);
                }}
              >
                {item.name}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <button
          onClick={(e) => {
            handleSubmit();
          }}
        >
          Add relation
        </button>
      </div>
    </>
  );
};

export default AddRelations;
