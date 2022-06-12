import React, { useState } from "react";

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
    <div>
      <label htmlFor="tagid">tag id:</label>
      <input
        type="number"
        id="tagid"
        value={updatedTagId}
        onChange={(e) => setUpdatedTagId(e.target.value)}
      />
      <label htmlFor="tagname">tag name</label>
      <input
        type="text"
        id="tagname"
        value={updatedTagName}
        onChange={(e) => {
          setUpdatedTagName(e.target.value);
        }}
      />
      <button onClick={() => handleUpdate()}>Update Tag</button>
      <button onClick={() => handleDelete()}>Delete Tag</button>
    </div>
  );
};

export default TagsUpdate;
