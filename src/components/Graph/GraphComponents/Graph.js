import React, { useEffect, useState, useContext } from "react";
//Components Imports
import ConceptView from "../../ConceptView/ConceptView";
import handleLink from "../../../Handlers/GraphComponent/handleLink";
import AddNode from "../../AddNode/AddNode";
import LinkView from "../LinkView/LinkView";
import setGraphandLabel from "../../../Handlers/GraphComponent/setGraphandLabel";
import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import Graph2D from "./Graph2D";
import Graph3D from "./Graph3D";
//context provider import
import { ConceptContext } from "../../../Context/ConceptContext";
import "./Graph.css";

const Graph = () => {
  const { concepts } = useContext(ConceptContext);
  const [graphData, setGraphData] = useState({});
  const [labelData, setLabelData] = useState({});
  const [label, setLabel] = useState("");
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [link, setLink] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoverNode, setHoverNode] = useState();
  const [graphType, setGraphType] = useState(true);

  //link click handler
  const handleLinkClick = (link) => {
    setLink(link);
    const element = document.getElementById("linkView");
    element.scrollIntoView();
  };
  //set labels on node hover
  const handleNodeHover = (node) => {
    if (node) {
      return concepts[node.index].name;
    }
  };
  //Deals with node click
  const handleNodeClick = (node) => {
    let conceptName = concepts.find((concept, index) => {
      if (concept.id === node.id) {
        setSelectedIndex(index);
        return concept;
      }
    });
    setSelectedConcept(conceptName);
    const element = document.getElementById("conceptView");
    element.scrollIntoView();
  };
  //redraws the canvas when concepts are added, deleted, or edited
  const handleData = () => {
    const { myData, label } = setGraphandLabel(concepts);
    setGraphData(myData);
    setLabelData(label);
  };
  useEffect(() => {
    handleData();
  }, [concepts]);
  return (
    <>
      <div>
        <ToggleSwitch
          label="Graph Type:"
          graphType={graphType}
          setGraphType={setGraphType}
        />
        {/* Renders graph based on the graph type */}
        <div className="graph-container">
          {graphData?.nodes ? (
            graphType ? (
              <Graph2D
                concepts={concepts}
                graphData={graphData}
                labelData={labelData}
                handleLink={handleLink}
                handleNodeClick={handleNodeClick}
                handleNodeHover={handleNodeHover}
                setHoverNode={setHoverNode}
                setLabel={setLabel}
                handleLinkClick={handleLinkClick}
              />
            ) : (
              <Graph3D
                concepts={concepts}
                graphData={graphData}
                labelData={labelData}
                handleLink={handleLink}
                handleNodeClick={handleNodeClick}
                handleNodeHover={handleNodeHover}
                setHoverNode={setHoverNode}
                setLabel={setLabel}
                handleLinkClick={handleLinkClick}
              />
            )
          ) : (
            <>Loding...</>
          )}
        </div>
      </div>
      <div className="graph-info">
        {/* Renders the preview for hovered nodes or links */}
        <div className="preview-panel">
          <p>Hover on concept or relations to preview details</p>
          <div className="link-preview">
            <h5 className="title">Link:</h5> <h5>{label}</h5>
          </div>
          <div className="concept-preview">
            <h5 className="title">Concept:</h5>
            <h5>{hoverNode}</h5>
          </div>
        </div>
        <AddNode />
        {/* Displays links and concepts when user clicks either */}
        {link ? <LinkView link={link} setLink={setLink} /> : <> </>}
        <ConceptView
          conceptData={selectedConcept}
          selectedIndex={selectedIndex}
          setSelectedConcept={setSelectedConcept}
        />
      </div>
    </>
  );
};

export default Graph;
