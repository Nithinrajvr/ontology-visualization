import React, { useState } from "react";
import "./TagsUpdate.css";
import { MdDelete } from "react-icons/md";

//Handle the update of the tags

const TagsUpdate = ({ tagsList, tag, tagIndex, setTags }) => {
  const [updatedTagName, setUpdatedTagName] = useState(tag.name);
  const [updatedTagId, setUpdatedTagId] = useState(tag.id);
  const handleUpdate = () => {
    tagsList[tagIndex].name = updatedTagName;
    tagsList[tagIndex].id = updatedTagId;
    setTags([...tagsList]);
  };
  const handleDelete = () => {
    tagsList.splice(tagIndex, 1);
    setTags([...tagsList]);
  };
  return (
    <div className="tags__container">
      <div className="tags__input">
        <div className="tags__form-item">
          <label htmlFor="tagid" className="form-label">
            Tag Id :
          </label>
          <input
            className="form-input"
            type="number"
            id="tagid"
            value={updatedTagId}
            onChange={(e) => setUpdatedTagId(e.target.value)}
          />
        </div>
        <div className="tags__form-item">
          <label htmlFor="tagname" className="form-label">
            Tag Name :
          </label>
          <input
            className="form-input"
            type="text"
            id="tagname"
            value={updatedTagName}
            onChange={(e) => {
              setUpdatedTagName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="tags__button-container">
        <button onClick={() => handleUpdate()} className="update-btn">
          Update
        </button>
        <button onClick={() => handleDelete()} className="delete-btn">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default TagsUpdate;
