import axios from "axios";

const API = 'http://localhost:3000/api'

const getAllCards = async () => {
  return axios.get(`${API}/cards`);
};

export default { getAllCards };
