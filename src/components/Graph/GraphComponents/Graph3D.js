import React, { useRef, useCallback } from "react";
import ForceGraph3d from "react-force-graph-3d";
import SpriteText from "three-spritetext";

/////////////////////////////////////  Draws a 3D Graph  ///////////////////////////////////////////

const Graph3D = ({
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
  const handleClick = useCallback(
    (node) => {
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1.5 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );
  const GROUPS = 12;
  return (
    <ForceGraph3d
      ref={fgRef}
      // onEngineStop={() => fgRef.current.zoomToFit(400)}
      backgroundColor="black"
      linkDirectionalArrowRelPos={1}
      linkDirectionalArrowLength={5.5}
      linkCurvature={0.3}
      width={690}
      height={540}
      graphData={graphData}
      nodeLabel={(node) => {
        const label = handleNodeHover(node);
        return label;
      }}
      nodeAutoColorBy={(node) => {
        node.id % GROUPS;
      }}
      linkColor="red"
      nodeThreeObject={(node) => {
        const sprite = new SpriteText(labelData[node.id]);
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      }}
      linkDirectionalParticles={1}
      linkWidth={1}
      linkLabel={(link) => {
        const label = handleLink(link, concepts);
        return label;
      }}
      onNodeClick={(node) => {
        handleNodeClick(node);
        handleClick(node);
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
    />
  );
};

export default Graph3D;
