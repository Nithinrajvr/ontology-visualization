import React, { useState, useContext, useEffect } from "react";
import "./RelationsEditor.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { ConceptContext } from "../../../src/Context/ConceptContext";
import { data } from "../../../src/data/data";

const RelationsEditor = ({ conceptData }) => {
  const { concepts, setConcepts } = useContext(ConceptContext);
  const [newRelationName, setNewRelationName] = useState("");
  const [newRelationConcept, setNewRelationConcept] = useState("");
  const [selectedRelationName, setSelectedRelationName] =
    useState("Choose Relation");

  const addRelation = (e, id) => {
    e.preventDefault();
    console.log(id);
    data.concepts.find((concept, index) => {
      if (concept.id === id) {
        console.log(newRelationConcept);
        data.concepts[index].relations.push({
          name: newRelationName,
          concept: {
            id: data.concepts[newRelationConcept].id,
            name: data.concepts[newRelationConcept].name,
            semanticClass: data.concepts[newRelationConcept].semanticClass,
          },
        });
      }
    });
    let newArr = [...data.concepts];
    setConcepts(newArr);
  };
  const handleRelation = (index, name) => {
    setNewRelationConcept(index);
    setSelectedRelationName(name);
  };
  useEffect(() => {
    console.log("render relation");
  }, [concepts]);
  return (
    <div>
      <h5>Relations:</h5>
      {conceptData?.relations?.map((relation, index) => {
        return (
          <div>
            <form-group>
              <label htmlFor={`${"relationName"}${index}`}>
                Relation Name:{" "}
              </label>
              <input
                type="text"
                id={`${"relationName"}${index}`}
                value={relation.name}
              />
            </form-group>
            <form-group>
              <label htmlFor={`${"relationConcept"}${index}`}>
                Relation Concept:{" "}
              </label>
              <input
                type="text"
                id={`${"relationConcept"}${index}`}
                value={relation?.concept.name}
              />
            </form-group>
          </div>
        );
      })}
      <h5>Add new Relation</h5>
      <form>
        <form-group>
          <label htmlFor="newRelationName">Relation Name: </label>
          <input
            type="text"
            id="newRelationName"
            placeholder="Relation Name"
            value={newRelationName}
            onChange={(e) => setNewRelationName(e.target.value)}
            required
          />
        </form-group>
        <form-group>
          <label htmlFor="newRelationConcept" required>
            Relation Concept:{" "}
          </label>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedRelationName}
          >
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
        </form-group>
        <button
          type="submit"
          className="mybtn"
          onClick={(e) => addRelation(e, conceptData.id)}
        >
          Add relation
        </button>
      </form>
    </div>
  );
};

export default RelationsEditor;
