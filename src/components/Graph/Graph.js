import React, { useEffect, useState, useContext } from "react";
import ForceGraph2d from "react-force-graph-2d";
import ConceptView from "../ConceptView/ConceptView";
import handleLink from "../../Handlers/GraphComponent/handleLink";
import AddNode from "../AddNode/AddNode";
import setGraphandLabel from "../../Handlers/GraphComponent/setGraphandLabel";
import { ConceptContext } from "../../Context/ConceptContext";

const Graph = () => {
  const { concepts } = useContext(ConceptContext);
  const [graphData, setGraphData] = useState({});
  const [labelData, setLabelData] = useState({});
  const [selectedConcept, setSelectedConcept] = useState(null);

  const handleNodeClick = (node) => {
    let conceptName = concepts.find((concept) => {
      if (concept.id === node.id) {
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
    console.log("rerender graph");
  }, [concepts]);
  return (
    <div className="graph-container">
      {graphData?.nodes ? (
        <ForceGraph2d
          linkColor="black"
          backgroundColor="grey"
          linkDirectionalArrowRelPos={1}
          linkDirectionalArrowLength={3.5}
          linkCurvature={0.25}
          width={1000}
          height={600}
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
          onLinkHover={(link) => {
            const label = handleLink(link, concepts);
            // console.log(label);
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
      <AddNode />
      <ConceptView conceptData={selectedConcept} />
    </div>
  );
};

export default Graph;
