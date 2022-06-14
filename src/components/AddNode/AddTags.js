import React, { useState, useEffect } from "react";

const AddTags = ({ tags, setTags }) => {
  const [tagName, setTagName] = useState("");
  const [tagId, setTagId] = useState();
  const [error, setError] = useState("");
  const [tagList, setTagList] = useState([]);
  // let taglist = [];
  const handleTagClick = () => {
    if (tagName !== "" && tagId !== "") {
      tagList.push({ id: tagId, name: tagName });
      setTags([...tagList]);
      setError("");
    } else {
      setError("Please fill in all fields");
    }
  };
  useEffect(() => {}, [tags]);
  return (
    <>
      <h5 className="concept__item-title">Tags:</h5>
      {tags.map((tag, index) => {
        return (
          <div key={index}>
            <label className="form-label">Tag id: {tag.id}</label>
            <label className="form-label">Tag name: {tag.name}</label>
          </div>
        );
      })}
      <div className="tags__input">
        <div className="form-item">
          <label htmlFor="tagId" className="form-label">
            Tag Id:{" "}
          </label>
          <input
            type="number"
            id="tagId"
            className="form-input"
            placeholder="Tag Id"
            onChange={(e) => setTagId(e.target.value)}
            value={tagId}
          />
        </div>
        <div className="form-item">
          <label htmlFor="tags" className="form-label">
            Tag name:{" "}
          </label>
          <input
            type="text"
            id="tags"
            placeholder="Tag name"
            className="form-input"
            value={tagName}
            onChange={(e) => setTagName(e.target.value)}
          />
        </div>
        {error !== "" && <p className="error">{error}</p>}
        <div className="button-container">
          <button
            className="mybtn"
            id="addTag"
            onClick={() => {
              handleTagClick();
            }}
          >
            Add Tag
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTags;
