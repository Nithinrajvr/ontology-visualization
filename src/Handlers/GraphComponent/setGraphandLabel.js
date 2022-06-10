const setGraphandLabel = (concepts) => {
  let label = {};
  let myData = {
    nodes: [],
    links: [],
  };

  concepts?.forEach((concept) => {
    myData.nodes.push({ id: concept.id });
    concept.relations.forEach((relation) => {
      myData.links.push({
        source: concept.id,
        target: relation.concept.id,
      });
    });
    label[concept.id] = concept.semanticClass;
  });
  return { myData, label };
};

export default setGraphandLabel;
