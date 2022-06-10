import React, { useContext, useState } from "react";
import "./ConceptEditor.css";
import RelationsEditor from "../RelationsEditor/RelationsEditor";
import { ConceptContext } from "../../Context/ConceptContext";

const ConceptEditor = ({ conceptData }) => {
  const { concepts } = useContext(ConceptContext);
  return (
    <div className="concept-editor">
      <form className="concept-form">
        <form-group>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={conceptData?.name}
            placeholder="
          Concept Name"
          />
        </form-group>
        <form-group>
          <label htmlFor="isOrtho">Is Orthogonal: </label>
          <input type="checkbox" id="isOrtho" value={conceptData?.isOrtho} />
        </form-group>
        <form-group>
          <label htmlFor="semanticClass">Semantic Class: </label>
          <input
            type="text"
            id="semanticClass"
            placeholder="Symantic Class"
            value={conceptData?.semanticClass}
          />
        </form-group>
        <form-group>
          <h5 htmlFor="tags">Tags: </h5>
          {conceptData.tags.map((tag) => {
            return (
              <>
                <label htmlFor="tagid">tag id:</label>
                <input type="text" id="tagid" value={tag.id} />
                <label htmlFor="tagname">tag name</label>
                <input type="text" id="tagid" value={tag.name} />
              </>
            );
          })}
        </form-group>
        <div className="concepts-relations">
          <RelationsEditor conceptData={conceptData} />
        </div>
      </form>
    </div>
  );
};

export default ConceptEditor;
