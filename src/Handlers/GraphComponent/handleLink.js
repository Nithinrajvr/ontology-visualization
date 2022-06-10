const handleLink = (link,concepts) => {
   let label = "";
   let LinkText = concepts.find((concept) => {
     if (concept.id === link?.source.id) {
       const linkLabel = concept.relations.find((relation) => {
         if (relation.concept.id === link.target.id) {
           label = relation.name;
           return relation;
         }
       });
       return linkLabel.name;
     }
   });
   return label;;
};

export default handleLink;
