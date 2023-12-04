import axios from "axios";

const baseURL = "http://localhost:3000/api"

const getAllCards = () => {
  return axios.get(`${baseURL}/cards`);
};

const getOneCard = (cardId) => {
  return axios.get(`${baseURL}/cards/${cardId}`);
}

export default { getAllCards, getOneCard };
