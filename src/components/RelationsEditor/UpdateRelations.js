import React, { useEffect, useState } from "react";

const UpdateRelations = ({
  relationList,
  setRelationList,
  relationIndex,
  relation,
}) => {
  let updatedRelationList = [...relationList];
  const [updatedRelationName, setUpdatedRelationName] = useState(relation.name);
  const handleUpdate = () => {
    updatedRelationList[relationIndex].name = updatedRelationName;
    setRelationList([...updatedRelationList]);
    setUpdatedRelationName();
  };
  const handleDelete = () => {
    updatedRelationList.splice(relationIndex, 1);
    setRelationList([...updatedRelationList]);
  };
  useEffect(() => {
    setUpdatedRelationName(relation.name);
    updatedRelationList = [...relationList];
  }, [relation]);
  return (
    <>
      <div>
        <form-group>
          <label htmlFor="relationName">Relation Name: </label>
          <input
            type="text"
            id="relationName"
            value={updatedRelationName}
            onChange={(e) => {
              setUpdatedRelationName(e.target.value);
            }}
          />
        </form-group>
        <form-group>
          <label htmlFor={`${"relationConcept"}${relationIndex}`}>
            Relation Concept:{" "}
          </label>
          <input
            disabled={true}
            readOnly
            type="text"
            id="relationConcept"
            value={relation?.concept.name}
          />
        </form-group>
        <button onClick={() => handleUpdate()}>Update</button>
        <button onClick={() => handleDelete()}>Delete</button>
      </div>
    </>
  );
};

export default UpdateRelations;
