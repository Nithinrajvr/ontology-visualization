import React, { useState, useContext, useEffect } from "react";
import AddNodeForm from "./AddNodeForm/AddNodeForm";
import "./AddNode.css";
import { ConceptContext } from "../../Context/ConceptContext";

//Component adds a new node (Concept) to the graph

const AddNode = () => {
  const { concepts } = useContext(ConceptContext);
  const [addNode, setAddNode] = useState(false);
  const [isNodeCreated, setIsNodeCreated] = useState(false);
  let id;
  if (concepts.length != 0) {
    id = concepts[concepts.length - 1]?.id + 1;
  } else {
    id = 1;
  }
  const handleNodeCreation = () => {
    setTimeout(() => {
      setIsNodeCreated(false);
    }, 2000);
  };
  useEffect(() => {
    handleNodeCreation();
  }, [isNodeCreated]);
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
      {isNodeCreated ? (
        <div
          className="section-title"
          style={{ backgroundColor: "green", color: "white" }}
        >
          Node Created successfully
        </div>
      ) : (
        <></>
      )}
      {addNode ? (
        <>
          <div className="section-title">Create new node</div>
          <div className="addnode__container">
            <AddNodeForm
              id={id}
              setAddNode={setAddNode}
              setIsNodeCreated={setIsNodeCreated}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddNode;
