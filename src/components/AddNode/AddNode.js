import React, { useState, useContext } from "react";
import AddNodeForm from "./AddNodeForm";
import "./AddNode.css";
import { ConceptContext } from "../../Context/ConceptContext";
const AddNode = () => {
  const { concepts } = useContext(ConceptContext);
  const id = concepts[concepts.length - 1]?.id + 1;

  const [addNode, setAddNode] = useState(false);
  return (
    <div>
      <button
        className="mybtn"
        onClick={() => {
          setAddNode(!addNode);
        }}
      >
        {addNode ? "Close" : "Add Node"}
      </button>
      {addNode ? (
        <div className="addnode-container">
          <AddNodeForm id={id} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddNode;
