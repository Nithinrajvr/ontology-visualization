import React, { useState, useContext, useEffect } from "react";
import { ConceptContext } from "../../../Context/ConceptContext";
import AddRelations from "../AddRelations";
import AddTags from "../AddTags";
import "./AddNodeForm.css";

//Form for adding a new node (Concept) to the graph
//Relations and Tags are added in separate child components

const AddNodeForm = ({ id, setAddNode, setIsNodeCreated }) => {
  const [name, setName] = useState("");
  const [isOrtho, setIsOrtho] = useState(false);
  const [semanticClass, setSemanticClass] = useState("");
  const [tags, setTags] = useState([]);
  const [relations, setRelations] = useState([]);
  const { concepts, setConcepts } = useContext(ConceptContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || semanticClass === "") {
      setError("Name and symantic class are required");
    } else {
      let newConcept = {
        id: id,
        name: name,
        isOrtho: isOrtho,
        semanticClass: semanticClass,
        tags: tags,
        relations: relations,
      };
      setConcepts([...concepts, newConcept]);
      setIsNodeCreated(true);
      setRelations([]);
      setTags([]);
      setName("");
      setSemanticClass("");
      setIsOrtho(false);
      setError("");
      setAddNode(false);
    }
  };
  useEffect(() => {
    setRelations([]);
    setTags([]);
  }, [concepts]);
  return (
    <>
      <div className="addNode__form .form">
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
        {error ? <p className="error">{error}</p> : <></>}
        <button className="form-submit-btn" onClick={(e) => handleSubmit(e)}>
          Create Concept
        </button>
      </div>
    </>
  );
};

export default AddNodeForm;
