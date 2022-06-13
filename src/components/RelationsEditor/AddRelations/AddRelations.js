import React, { useContext, useState } from "react";
import { ConceptContext } from "../../../Context/ConceptContext";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./AddRelations.css";

//Add new relation to the concepts list

const AddRelations = ({ relationList, setRelationList }) => {
  const { concepts } = useContext(ConceptContext);
  const [newRelationName, setNewRelationName] = useState("");
  const [newRelationConcept, setNewRelationConcept] = useState("");
  const [selectedConceptName, setSelectedConceptName] =
    useState("Choose Relation");
  let newRelationList = [...relationList];
  const handleRelation = (index, name) => {
    setNewRelationConcept(index);
    setSelectedConceptName(name);
  };
  //Adds the relation to the selected concept

  const addRelation = (id) => {
    if (id) {
      newRelationList.push({
        name: newRelationName,
        concept: {
          id: concepts[newRelationConcept].id,
          name: concepts[newRelationConcept].name,
          semanticClass: concepts[newRelationConcept].semanticClass,
        },
      });
      setRelationList([...newRelationList]);
    }
  };
  return (
    <>
      <form className="relations__add-container">
        <div className="relations__input">
          <div className="tags__form-item">
            <label htmlFor="newRelationName" className="form-label">
              Relation Name:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              id="newRelationName"
              placeholder="Relation Name"
              value={newRelationName}
              onChange={(e) => setNewRelationName(e.target.value)}
              required
            />
          </div>
          <div className="tags__form-item">
            <label htmlFor="newRelationConcept" className="form-label">
              Relation Concept:{" "}
            </label>
            {/* renders the existing concepts list as options for adding a new relation */}
            <DropdownButton
              required
              id="dropdown-basic-button"
              title={selectedConceptName}
              className="form-input dropdown"
            >
              {concepts?.map((item, index) => {
                return (
                  <Dropdown.Item
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
        </div>
        <div className="relations__button-container">
          <button
            type="submit"
            className="relations__button"
            onClick={() => addRelation()}
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default AddRelations;
