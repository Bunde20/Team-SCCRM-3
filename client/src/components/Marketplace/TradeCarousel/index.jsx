import React from "react";
import Carousel from "react-bootstrap/Carousel";
import TradeOffer from "../TradeOffer";

export default function TradeCarousel({ tradeOffers, currentUser }) {
  const matchCards = (seekingCardId, userOfferId) => {
    return (
      currentUser._id !== userOfferId &&
      currentUser.cards &&
      currentUser.cards.some((card) => card._id === seekingCardId)
    );
  };

  return (
    <Carousel slide={false}>
      {tradeOffers.map((offer) => (
        <Carousel.Item key={offer._id}>
          <TradeOffer offer={offer} currentUser={currentUser} matchCards={matchCards(offer.seekingCardId, offer.userId)} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
