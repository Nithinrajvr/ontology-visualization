import React, { useState, useContext, useEffect } from "react";
import TagsEditor from "./TagsEditor";
import { ConceptContext } from "../../Context/ConceptContext";

const NodeEditor = ({ conceptData, selectedIndex }) => {
  const { setConcepts, concepts } = useContext(ConceptContext);
  const [name, setName] = useState(conceptData.name);
  const [semanticClass, setSemanticClass] = useState(conceptData.semanticClass);
  const [isOrtho, setIsOrtho] = useState(conceptData.isOrtho);
  const [tags, setTags] = useState(conceptData.tags);
  let newConcepts = [...concepts];

  const handleSubmit = (e) => {
    e.preventDefault();
    newConcepts[selectedIndex] = {
      id: conceptData.id,
      name: name,
      semanticClass: semanticClass,
      isOrtho: isOrtho,
      tags: tags,
      relations: conceptData.relations,
    };
    setConcepts([...newConcepts]);
  };
  useEffect(() => {
    setName(conceptData.name);
    setSemanticClass(conceptData.semanticClass);
    setIsOrtho(conceptData.isOrtho);
    setTags(conceptData.tags);
  }, [conceptData]);

  return (
    <form className="concept__form">
      <form-group>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          required
          placeholder="
          Concept Name"
          onChange={(e) => setName(e.target.value)}
        />
      </form-group>
      <form-group>
        <label htmlFor="isOrtho">Is Orthogonal: </label>
        <input
          type="checkbox"
          id="isOrtho"
          value={isOrtho}
          onChange={(e) => {
            setIsOrtho(!isOrtho);
          }}
        />
      </form-group>
      <form-group>
        <label htmlFor="semanticClass">Semantic Class: </label>
        <input
          type="text"
          id="semanticClass"
          placeholder="Symantic Class"
          required
          value={semanticClass}
          onChange={(e) => setSemanticClass(e.target.value)}
        />
      </form-group>
      <TagsEditor tags={tags} setTags={setTags} />
      <button
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Udpdate Concept
      </button>
    </form>
  );
};

export default NodeEditor;
