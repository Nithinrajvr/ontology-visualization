import React, { useContext, useState, useEffect } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { ConceptContext } from "../../../src/Context/ConceptContext";

const AddRelations = ({ relations, setRelations }) => {
  const { concepts } = useContext(ConceptContext);
  const [newRelationConcept, setNewRelationConcept] = useState("");
  const [relationList, setRelationList] = useState([]);
  const [newRelationName, setNewRelationName] = useState("");
  const [error, setError] = useState("");
  const [selectedRelationName, setSelectedRelationName] =
    useState("Choose Relation");

  const handleRelation = (index, name) => {
    setNewRelationConcept(index);
    setSelectedRelationName(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newRelationName === "" || selectedRelationName === "Choose Relation") {
      setError("Please fill in all fields");
    } else {
      setError("");
      relationList.push({
        name: newRelationName,
        concept: {
          id: concepts[newRelationConcept].id,
          name: concepts[newRelationConcept].name,
          semanticClass: concepts[newRelationConcept].semanticClass,
        },
      });
      setRelations([...relationList]);
    }
  };

  useEffect(() => {}, [relations]);
  return (
    <>
      <h5 className="concept__item-title">Relations:</h5>
      {relationList?.map((relation, index) => {
        return (
          <div key={index}>
            <strong>Relation {index + 1}</strong>
            <p>
              <strong>Name:</strong> {relation.name}
            </p>
            <p>
              <strong>Concept</strong> {relation.concept.name}
            </p>
          </div>
        );
      })}
      <div className="relations__input">
        <div className="form-item">
          <label htmlFor="relationName" className="form-label">
            Relations Name:{" "}
          </label>
          <input
            type="text"
            id="relationName"
            className="form-input"
            placeholder="Name"
            value={newRelationName}
            onChange={(e) => {
              setNewRelationName(
                e.target.value.replace(/ /g, "_").toUpperCase()
              );
            }}
          />
        </div>
        <div className="form-item">
          <label htmlFor="conceptName" className="form-label">
            Concept:{" "}
          </label>
          <DropdownButton
            id="dropdown-basic-button"
            className="form-input dropdown"
            title={selectedRelationName}
          >
            {concepts?.map((item, index) => {
              return (
                <Dropdown.Item
                  // href={`#/action-${index + 1}`}
                  href="#"
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
        </div>
        {error ? (
          <p className="error" style={{ color: "red" }}>
            {error}
          </p>
        ) : (
          <></>
        )}
        <div className="button-container">
          <button
            id="add_Relation"
            className="mybtn"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Add relation
          </button>
        </div>
      </div>
    </>
  );
};

export default AddRelations;
