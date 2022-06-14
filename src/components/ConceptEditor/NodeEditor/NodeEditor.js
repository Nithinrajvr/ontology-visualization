import React, { useState, useContext, useEffect } from "react";
import TagsEditor from "../TagsEditor/TagsEditor";
import "./NodeEditor.css";
import { ConceptContext } from "../../../Context/ConceptContext";

//This component edits the main concept details like name, semantic class, isOrtho, tags
//Tags is edited by the child component TagsEditor

const NodeEditor = ({ conceptData, selectedIndex }) => {
  const { setConcepts, concepts } = useContext(ConceptContext);
  const [name, setName] = useState(conceptData.name);
  const [semanticClass, setSemanticClass] = useState(conceptData.semanticClass);
  const [isOrtho, setIsOrtho] = useState(conceptData.isOrtho);
  const [tags, setTags] = useState(conceptData.tags);
  const [error, setError] = useState("");
  let newConcepts = [...concepts];

  const handleSubmit = () => {
    //Updating the concepts object with the new values on submitting the form
    if (name !== "" && semanticClass !== "") {
      newConcepts[selectedIndex] = {
        id: conceptData.id,
        name: name,
        semanticClass: semanticClass,
        isOrtho: isOrtho,
        tags: tags,
        relations: conceptData.relations,
      };
      setConcepts([...newConcepts]);
      setError("");
    } else {
      setError("Name and semantic class are required");
    }
  };
  useEffect(() => {
    setName(conceptData.name);
    setSemanticClass(conceptData.semanticClass);
    setIsOrtho(conceptData.isOrtho);
    setTags(conceptData.tags);
  }, [conceptData]);

  return (
    <div className="concept__form" id="editor">
      <h5 className="concept__form-title">Concept Edit</h5>
      <div className="concept__form-item">
        <label htmlFor="name" className="concept__form-label">
          Name:{" "}
        </label>
        <input
          className="concept__form-input"
          type="text"
          id="name"
          value={name}
          required
          placeholder="
          Concept Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="concept__form-item">
        <label htmlFor="isOrtho" className="concept__form-label">
          Is Orthogonal:{" "}
        </label>
        <div className="concept__checkbox-input">
          <input
            className="form-input"
            type="checkbox"
            id="isOrtho"
            value={isOrtho}
            onChange={() => {
              setIsOrtho(!isOrtho);
            }}
          />
        </div>
      </div>
      <div className="concept__form-item">
        <label htmlFor="semanticClass" className="concept__form-label">
          Semantic Class:{" "}
        </label>
        <input
          className="concept__form-input"
          type="text"
          id="semanticClass"
          placeholder="Symantic Class"
          required
          value={semanticClass}
          onChange={(e) => setSemanticClass(e.target.value)}
        />
      </div>

      {/* component responsible for editing the tags */}

      <TagsEditor tags={tags} setTags={setTags} />
      {error ? <p className="error">{error}</p> : <></>}
      <button
        className="form-submit-btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        Update Concept
      </button>
    </div>
  );
};

export default NodeEditor;
