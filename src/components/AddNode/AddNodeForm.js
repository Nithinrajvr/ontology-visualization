import React, { useState, useContext, useEffect } from "react";
import { ConceptContext } from "../../Context/ConceptContext";
import AddRelations from "./AddRelations";
import AddTags from "./AddTags";

const AddNodeForm = ({ id }) => {
  const [name, setName] = useState("");
  const [isOrtho, setIsOrtho] = useState(false);
  const [semanticClass, setSemanticClass] = useState("");
  const [tags, setTags] = useState([]);
  const [relations, setRelations] = useState([]);
  const { concepts, setConcepts } = useContext(ConceptContext);

  const handleSubmit = (e) => {
    if (name === "" || semanticClass === "") {
      console.log("error");
    } else {
      console.log("run");
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
  };
  return (
    <>
      <form>
        <label>New Id: {id}</label>

        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            required
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
            required
            onChange={(e) => setSemanticClass(e.target.value)}
          />
        </div>
        <AddRelations relations={relations} setRelations={setRelations} />
        <AddTags tags={tags} setTags={setTags} />
        <button type="submit" className="mybtn" onClick={() => handleSubmit()}>
          Create Concept
        </button>
      </form>
    </>
  );
};

export default AddNodeForm;
