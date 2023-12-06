import axios from "axios";

const baseURL = "";

const getAllOffers = () => {
  return axios.get(`/api/trade/offers`);
};

const getOneTradeOffer = (offerId) => {
  return axios.get(`/api/trade/offers/${offerId}`);
};

const createNewTradeOffer = (userId, offeredCardId, seekingCardId) => {
  return axios.post(`/api/trade/offers`, {
    userId: userId,
    offeredCardId: offeredCardId,
    seekingCardId: seekingCardId,
  });
};

const deleteOneTradeOffer = (offerId) => {
  return axios.delete(`/api/trade/offers/${offerId}`);
};

const completeTrade = (user1Id, card1Id, user2Id, card2Id) => {
  return axios.put(
    `/api/trade/${user1Id}/${card1Id}/${user2Id}/${card2Id}`
  );
};

export default {
  getAllOffers,
  getOneTradeOffer,
  createNewTradeOffer,
  deleteOneTradeOffer,
  completeTrade,
};
