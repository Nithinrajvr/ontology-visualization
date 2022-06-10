import "./App.css";
import Graph from "../src/components/Graph/Graph";
import { data } from "./data/data";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConceptContext } from "../src/Context/ConceptContext";

function App() {
  const [concepts, setConcepts] = useState(data.concepts);

  useEffect(() => {}, [concepts]);

  return (
    <ConceptContext.Provider value={{ concepts, setConcepts }}>
      <div className="App">
        <Graph />
      </div>
    </ConceptContext.Provider>
  );
}

export default App;
