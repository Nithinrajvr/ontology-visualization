import React, { useState, useContext } from "react";
import AddNodeForm from "./AddNodeForm/AddNodeForm";
import "./AddNode.css";
import { ConceptContext } from "../../Context/ConceptContext";

//Component adds a new node (Concept) to the graph

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
        id="addNode"
      >
        {addNode ? "Close" : "Add Node"}
      </button>
      {addNode ? (
        <>
          <div className="section-title">Create new node</div>
          <div className="addnode__container">
            <AddNodeForm id={id} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddNode;
