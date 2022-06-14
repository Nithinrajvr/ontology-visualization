import "./App.css";
import Graph from "../src/components/Graph/GraphComponents/Graph";
import Instructions from "./components/Instructions/Instructions";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import { ConceptContext } from "../src/Context/ConceptContext";
import { BsInfoSquareFill } from "react-icons/bs";

function App() {
  const [concepts, setConcepts] = useState([]);
  const [instructions, setInstructions] = useState(false);
  //Setter for concepts from given concepts data
  useEffect(() => {}, [concepts]);
  useEffect(() => {
    setConcepts(data.concepts);
  }, []);
  return (
    <ConceptContext.Provider value={{ concepts, setConcepts }}>
      <div className="App">
        {instructions ? (
          <Instructions setInstructions={setInstructions} />
        ) : (
          <></>
        )}
        <header className="app-header">
          <h2>Ontology Visualizer</h2>
          <button
            className="instructions-btn"
            onClick={() => setInstructions(!instructions)}
          >
            <BsInfoSquareFill /> Instructions
          </button>
        </header>
        <div className="app-container">
          <Graph />
        </div>
      </div>
    </ConceptContext.Provider>
  );
}

export default App;
