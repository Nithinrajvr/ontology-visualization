import { data } from "../../data/data.js";
const findIndexbyId = (id) => {
  const index = data.concepts.findIndex((concept) => concept.id === id);
  return index;
};

export default findIndexbyId;
