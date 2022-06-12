import "./App.css";
import Graph from "../src/components/Graph/Graph";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import { ConceptContext } from "../src/Context/ConceptContext";

function App() {
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {}, [concepts]);
  useEffect(() => {
    setConcepts(data.concepts);
  }, []);
  return (
    <ConceptContext.Provider value={{ concepts, setConcepts }}>
      <div className="App">
        <header className="app-header">
          <h2>Ontology Visualizer</h2>
        </header>
        <div className="app-container">
          <Graph />
        </div>
      </div>
    </ConceptContext.Provider>
  );
}

export default App;
