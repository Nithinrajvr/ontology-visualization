import React, { useState, useContext } from "react";
import { ConceptContext } from "../../../Context/ConceptContext";
import AddRelations from "../AddRelations";
import AddTags from "../AddTags";
import "./AddNodeForm.css";

//Form for adding a new node (Concept) to the graph
//Relations and Tags are added in separate child components

const AddNodeForm = ({ id }) => {
  const [name, setName] = useState("");
  const [isOrtho, setIsOrtho] = useState(false);
  const [semanticClass, setSemanticClass] = useState("");
  const [tags, setTags] = useState([]);
  const [relations, setRelations] = useState([]);
  const [isNodeCreated, setIsNodeCreated] = useState(false);
  const { concepts, setConcepts } = useContext(ConceptContext);

  const handleSubmit = (e) => {
    if (name === "" || semanticClass === "") {
      console.log("error");
    } else {
      let newConcept = {
        id: id,
        name: name,
        isOrtho: isOrtho,
        semanticClass: semanticClass,
        tags: [],
        relations: relations,
      };
      setConcepts([...concepts, newConcept]);
    }
    setIsNodeCreated(true);
    setTimeout(() => {
      setIsNodeCreated(false);
    }, 2000);
    setRelations([]);
    setTags([]);
    setName("");
    setSemanticClass("");
    setIsOrtho(false);
  };

  return (
    <>
      <form className="addNode__form .form">
        {isNodeCreated ? (
          <div
            className="section-title"
            style={{ backgroundColor: "green", color: "white" }}
          >
            Node Created succefully
          </div>
        ) : (
          <></>
        )}
        <label className="form-label">New Id: {id}</label>

        <div className="form-item">
          <label htmlFor="name" className="form-label">
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            className="form-input"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-item">
          <label htmlFor="isOrtho" className="form-label">
            Is Orthogonal:{" "}
          </label>
          <div className="checkbox-input">
            <input
              type="checkbox"
              className="form-input"
              id="isOrtho"
              value={isOrtho}
              onChange={() => {
                setIsOrtho(!isOrtho);
              }}
            />
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="semanticClass" className="form-label">
            Semantic Class:{" "}
          </label>
          <input
            type="text"
            id="semanticClass"
            className="form-input"
            placeholder="Semantic Class"
            value={semanticClass}
            required
            onChange={(e) => setSemanticClass(e.target.value)}
          />
        </div>
        <AddRelations relations={relations} setRelations={setRelations} />
        <AddTags tags={tags} setTags={setTags} />
        <button
          type="submit"
          className="form-submit-btn"
          onClick={() => handleSubmit()}
        >
          Create Concept
        </button>
      </form>
    </>
  );
};

export default AddNodeForm;
