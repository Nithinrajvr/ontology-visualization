import React, { useEffect } from "react";
import go from "gojs";

const Diagram = () => {
  useEffect(() => {
    const element = document.getElementById("myDiagramDiv");
    if (!element) {
      const myDiagram = new go.Diagram("myDiagramDiv", {
        "undoManager.isEnabled": true,
      });
      // define a simple Node template
      myDiagram.nodeTemplate = new go.Node("Auto")
        .add(
          new go.Shape(
            "Rectangle",
            // don't draw any outline
            { stroke: null }
          )
            // the Shape.fill comes from the Node.data.color property
            .bind("fill", "color")
        )
        .add(
          new go.TextBlock(
            // leave some space around larger-than-normal text
            { margin: 6, font: "18px sans-serif" }
          )
            // the TextBlock.text comes from the Node.data.key property
            .bind("text")
        );

      myDiagram.model = new go.GraphLinksModel([
        { key: 1, text: "Alpha", color: "lightblue" },
        { key: 2, text: "Beta", color: "orange" },
        { key: 3, text: "Gamma", color: "lightgreen" },
        { key: 4, text: "Delta", color: "pink" },
      ]);
    }
  }, []);

  return <div id="myDiagramDiv">Diagram</div>;
};

export default Diagram;
