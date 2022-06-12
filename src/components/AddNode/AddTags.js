import React, { useState, useEffect } from "react";

const AddTags = ({ tags, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [tagId, setTagId] = useState();
  let taglist = [];
  const handleTagClick = () => {
    taglist.push({ id: tagId, name: tagName });
    setTags([...taglist]);
  };
  useEffect(() => {}, [tags]);
  return (
    <>
      <h6>Tags:</h6>
      {tags.map((tag, index) => {
        return (
          <div key={index}>
            <label>Tag id: {tag.id}</label>
            <label>Tag name: {tag.name}</label>
          </div>
        );
      })}
      <div className="form-group">
        <label htmlFor="tagId">Tag Id: </label>
        <input
          type="number"
          id="tagId"
          placeholder="Tag Id"
          onChange={(e) => setTagId(e.target.value)}
          value={tagId}
        />
      </div>
      <div className="form-group">
        <label htmlFor="tags">Tag name: </label>
        <input
          type="text"
          id="tags"
          placeholder="Tag name"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <button
          onClick={() => {
            handleTagClick();
          }}
        >
          Add Tag
        </button>
      </div>
    </>
  );
};

export default AddTags;
