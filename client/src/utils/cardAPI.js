import axios from "axios";

const baseURL = "http://localhost:3000"

const getAllCards = () => {
  return axios.get(`${baseURL}/api/cards`);
};

const getOneCard = (cardId) => {
  return axios.get(`${baseURL}/api/cards/${cardId}`);
}

export default { getAllCards, getOneCard };
