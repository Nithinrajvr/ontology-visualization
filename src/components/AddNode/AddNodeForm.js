import React, { useState, useContext } from "react";
import { ConceptContext } from "../../Context/ConceptContext";

const AddNodeForm = ({ id }) => {
  const [name, setName] = useState("");
  const [isOrtho, setIsOrtho] = useState(false);
  const [semanticClass, setSemanticClass] = useState("");
  const [tags, setTags] = useState([]);
  const [tagName, setTagName] = useState("");
  const [tagId, setTagId] = useState(0);
  const { concepts, setConcepts } = useContext(ConceptContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newConcept = {
      id: id,
      name: name,
      isOrtho: isOrtho,
      semanticClass: semanticClass,
      tags: tags,
      relations: [],
    };
    setConcepts([...concepts, newConcept]);
    console.log("new");
  };
  return (
    <form>
      <label>Id: {id}</label>

      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="isOrtho">Is Orthogonal: </label>
        <input
          type="checkbox"
          id="isOrtho"
          value={isOrtho}
          onChange={() => {
            setIsOrtho(!isOrtho);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="semanticClass">Semantic Class: </label>
        <input
          type="text"
          id="semanticClass"
          placeholder="Semantic Class"
          value={semanticClass}
          onChange={(e) => setSemanticClass(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default AddNodeForm;
