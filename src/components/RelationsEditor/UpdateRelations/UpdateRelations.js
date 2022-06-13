import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./UpdateRelations.css";

//This component is used to update the exisitng relations of a concept
// the selected relation index and the relation object are recieved as props
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
  //updates the relation  list after deleting a relation
  //parent component is responsible for updating the concepts list
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
      <div className="relations__container">
        <div className="relations__input">
          <div className="relations__form-item">
            <label htmlFor="relationName" className="form-label">
              Name:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              id="relationName"
              value={updatedRelationName}
              onChange={(e) => {
                setUpdatedRelationName(e.target.value);
              }}
            />
          </div>
          <div className="relations__form-item">
            <label
              className="form-label"
              htmlFor={`${"relationConcept"}${relationIndex}`}
            >
              Concept:{" "}
            </label>
            <input
              className="form-input"
              disabled={true}
              readOnly
              type="text"
              id="relationConcept"
              value={relation?.concept.name}
            />
          </div>
        </div>
        <div className="relations__button-container">
          <button className="update-btn" onClick={() => handleUpdate()}>
            Update
          </button>
          <button className="delete-btn" onClick={() => handleDelete()}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateRelations;
