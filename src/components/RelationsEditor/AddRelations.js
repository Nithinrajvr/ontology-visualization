import React, { useContext, useState } from "react";
import { ConceptContext } from "../../Context/ConceptContext";
import { DropdownButton, Dropdown } from "react-bootstrap";

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
  const addRelation = (id) => {
    newRelationList.push({
      name: newRelationName,
      concept: {
        id: concepts[newRelationConcept].id,
        name: concepts[newRelationConcept].name,
        semanticClass: concepts[newRelationConcept].semanticClass,
      },
    });
    setRelationList([...newRelationList]);
  };
  return (
    <>
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
            title={selectedConceptName}
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
        <button type="submit" className="mybtn" onClick={() => addRelation()}>
          Add relation
        </button>
      </form>
      ;
    </>
  );
};

export default AddRelations;
