import React, { useState } from "react";
import TagsUpdate from "../TagsUpdate/TagsUpdate";
import "./TagsEditor.css";

//Edits the Tags of a given concept

const TagsEditor = ({ tags, setTags, selectedIndex, tag }) => {
  let tagsList = [...tags];
  const [newTagName, setNewTagName] = useState("");
  const [newTagId, setNewTagId] = useState();

  //Adding a new tag to the tags list

  const handleAddTag = () => {
    tagsList.push({ id: newTagId, name: newTagName });
    setTags([...tagsList]);
    setNewTagId("");
    setNewTagName("");
  };

  return (
    <>
      {tagsList.map((tag, index) => {
        return (
          <TagsUpdate
            tag={tag}
            tagIndex={index}
            tagsList={tags}
            setTags={setTags}
          />
        );
      })}
      <div className="tags__add-container">
        <div className="tags__input">
          <div className="tags__form-item">
            <label htmlFor="newtagid" className="form-label">
              Tag Id:
            </label>
            <input
              className="form-input"
              type="number"
              id="newtagid"
              placeholder="Tag Id"
              value={newTagId}
              onChange={(e) => {
                setNewTagId(e.target.value);
              }}
            />
          </div>
          <div className="tags__form-item">
            <label htmlFor="newtagname" className="form-label">
              Tag Name:
            </label>
            <input
              className="form-input"
              type="text"
              id="newtagname"
              placeholder="Tag Name"
              value={newTagName}
              onChange={(e) => {
                setNewTagName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="tags__button-container">
          <button
            className="tags__button"
            onClick={() => {
              handleAddTag();
            }}
          >
            {" "}
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default TagsEditor;
