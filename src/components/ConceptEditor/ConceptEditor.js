import React, { useContext, useState } from "react";
import "./ConceptEditor.css";
import RelationsEditor from "../RelationsEditor/RelationsEditor/RelationsEditor";
import findIndexbyId from "../../Handlers/ConceptView/findIndexbyId";
import { ConceptContext } from "../../Context/ConceptContext";
import NodeEditor from "./NodeEditor/NodeEditor";

const ConceptEditor = ({ conceptData, selectedIndex }) => {
  findIndexbyId(conceptData.id);
  const { concepts } = useContext(ConceptContext);

  return (
    <div className="concepts__container">
      <NodeEditor conceptData={conceptData} selectedIndex={selectedIndex} />
      <RelationsEditor
        conceptData={conceptData}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};

export default ConceptEditor;
