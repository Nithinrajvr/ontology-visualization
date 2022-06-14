import React, { useRef } from "react";
import ForceGraph2d from "react-force-graph-2d";

/////////////////////////////////////  Draws a 2D Graph  ///////////////////////////////////////////

const Graph2D = ({
  concepts,
  graphData,
  labelData,
  handleLink,
  handleNodeClick,
  handleNodeHover,
  setHoverNode,
  setLabel,
  handleLinkClick,
}) => {
  const fgRef = useRef();
  const GROUPS = 12;
  return (
    <ForceGraph2d
      ref={fgRef}
      onEngineStop={() => fgRef.current.zoomToFit(500)}
      backgroundColor="#D1CFE2"
      linkDirectionalArrowRelPos={1}
      linkDirectionalArrowLength={3.5}
      linkCurvature={0.3}
      width={690}
      height={540}
      graphData={graphData}
      nodeLabel={(node) => {
        const label = handleNodeHover(node);
        return label;
      }}
      linkDirectionalParticles={1}
      linkWidth={2}
      linkLabel={(link) => {
        const label = handleLink(link, concepts);
        return label;
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
        ctx.fillStyle = "#a1e0f5";
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );

        ctx.beginPath();
        ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI, false);
        ctx.fill();
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
  );
};

export default Graph2D;
