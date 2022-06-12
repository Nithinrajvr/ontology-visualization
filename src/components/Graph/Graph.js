import React, { useEffect, useState, useContext } from "react";
import "./Graph.css";
import ForceGraph2d from "react-force-graph-2d";
import ConceptView from "../ConceptView/ConceptView";
import handleLink from "../../Handlers/GraphComponent/handleLink";
import AddNode from "../AddNode/AddNode";
import LinkView from "./LinkView";
import setGraphandLabel from "../../Handlers/GraphComponent/setGraphandLabel";
import { ConceptContext } from "../../Context/ConceptContext";

const Graph = () => {
  const { concepts } = useContext(ConceptContext);
  const [graphData, setGraphData] = useState({});
  const [labelData, setLabelData] = useState({});
  const [label, setLabel] = useState("");
  const [selectedConcept, setSelectedConcept] = useState(null);
  const [link, setLink] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoverNode, setHoverNode] = useState();

  const handleLinkClick = (link) => {
    setLink(link);
  };
  const handleNodeHover = (node) => {
    if (node) {
      return concepts[node.index].name;
    }
  };

  const handleNodeClick = (node) => {
    let conceptName = concepts.find((concept, index) => {
      if (concept.id === node.id) {
        setSelectedIndex(index);
        return concept;
      }
    });
    setSelectedConcept(conceptName);
  };

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
      <div className="graph-container">
        {graphData?.nodes ? (
          <ForceGraph2d
            linkColor="black"
            backgroundColor="grey"
            linkDirectionalArrowRelPos={1}
            linkDirectionalArrowLength={3.5}
            linkCurvature={0.25}
            width={690}
            height={540}
            graphData={graphData}
            nodeLabel={(node) => {
              return labelData[node.id];
            }}
            linkDirectionalParticles={1}
            linkWidth={3}
            linkLabel={(link) => {
              handleLink(link, concepts);
            }}
            onNodeClick={(node) => {
              handleNodeClick(node);
            }}
            onNodeHover={(node) => {
              const nodeName = handleNodeHover(node);
              setHoverNode(nodeName);
            }}
            onLinkHover={(link) => {
              const label = handleLink(link, concepts);
              setLabel(label);
            }}
            onLinkClick={(link) => {
              handleLinkClick(link);
            }}
            nodeCanvasObject={(node, ctx, globalScale) => {
              const label = labelData[node.id];
              const fontSize = 12 / globalScale;
              ctx.font = `${fontSize}px Sans-Serif`;
              const textWidth = ctx.measureText(label).width;
              const bckgDimensions = [textWidth, fontSize].map(
                (n) => n + fontSize * 1
              ); // some padding
              ctx.fillStyle = "rgba(	0,191,255)";
              ctx.fillRect(
                node.x - bckgDimensions[0] / 2,
                node.y - bckgDimensions[1] / 2,
                ...bckgDimensions
              );

              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillStyle = "black";
              ctx.fillText(label, node.x, node.y);

              node.__bckgDimensions = bckgDimensions;
            }}
            nodePointerAreaPaint={(node, color, ctx) => {
              ctx.fillStyle = color;
              const bckgDimensions = node.__bckgDimensions;
              bckgDimensions &&
                ctx.fillRect(
                  node.x - bckgDimensions[0] / 2,
                  node.y - bckgDimensions[1] / 2,
                  ...bckgDimensions
                );
            }}
          />
        ) : (
          <>Loding...</>
        )}
      </div>
      <div className="graph-info">
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
        <ConceptView
          conceptData={selectedConcept}
          selectedIndex={selectedIndex}
        />
        {link ? <LinkView link={link} /> : <> </>}
      </div>
    </>
  );
};

export default Graph;
