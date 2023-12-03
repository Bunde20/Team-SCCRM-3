import axios from "axios";

const getAllCards = () => {
  return axios.get("http://localhost:3000/api/cards");
};

export default { getAllCards };
