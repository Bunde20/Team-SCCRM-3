import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsLeftRight}  from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import TradeButton from "./TradeBtn";
import cardAPI from "../utils/cardAPI";
import userAPI from "../utils/userAPI";

import "animate.css"

export default function TradeOffer(props) {
  const [offeredCard, setOfferedCard] = useState({});
  const [seekingCard, setSeekingCard] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    cardAPI
      .getOneCard(props.offer.offeredCardId)
      .then((res) => setOfferedCard(res.data[0]));

    cardAPI
      .getOneCard(props.offer.seekingCardId)
      .then((res) => setSeekingCard(res.data[0]));

    userAPI.getOneUser(props.offer.userId).then((res) => setUser(res.data[0]));
  }, []);

  return (
    <>
      <section className="border rounded m-4 p-4 text-center trade-container">
        <h2 className="text-center text-capitalize animate__animated animate__bounceIn animate__faster">{`${user.username} wants to trade!`}</h2>
        <div className="d-flex trade-card-container">
          <div>
            <h3 className="text-center">Offering</h3>
            <Card creature={offeredCard} />
          </div>
          <FontAwesomeIcon icon={faArrowsLeftRight} className="align-self-start fs-1 arrows" />
          <div>
            <h3 className="text-center">Seeking</h3>
            <Card creature={seekingCard} />
          </div>
        </div>
        {props.matchCards ? (
          <TradeButton
            user1={props.offer.userId}
            card1={props.offer.offeredCardId}
            user2={props.currentUser._id}
            card2={props.offer.seekingCardId}
            offerId={props.offer._id}
          />
        ) : (
          <h4 className="text-center">Pending offer...</h4>
        )}
      </section>
    </>
  );
}
