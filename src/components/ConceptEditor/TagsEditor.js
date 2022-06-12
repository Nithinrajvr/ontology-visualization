import React, { useState } from "react";
import TagsUpdate from "./TagsUpdate";

const TagsEditor = ({ tags, setTags, selectedIndex, tag }) => {
  let tagsList = [...tags];
  const [newTagName, setNewTagName] = useState("");
  const [newTagId, setNewTagId] = useState();

  const handleAddTag = () => {
    tagsList.push({ id: newTagId, name: newTagName });
    setTags([...tagsList]);
    setNewTagId("");
    setNewTagName("");
  };

  return (
    <>
      <form-group>
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
      </form-group>
      <form-group>
        <label htmlFor="newtagid">tag id:</label>
        <input
          type="number"
          id="newtagid"
          placeholder="Tag Id"
          value={newTagId}
          onChange={(e) => {
            setNewTagId(e.target.value);
          }}
        />
        <label htmlFor="newtagname">tag name</label>
        <input
          type="text"
          id="newtagname"
          placeholder="Tag Name"
          value={newTagName}
          onChange={(e) => {
            setNewTagName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleAddTag();
          }}
        >
          {" "}
          Add tag
        </button>
      </form-group>
    </>
  );
};

export default TagsEditor;
