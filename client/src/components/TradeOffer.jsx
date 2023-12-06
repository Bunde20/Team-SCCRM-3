import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowsLeftRight}  from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import TradeButton from "./TradeBtn";
import cardAPI from "../utils/cardAPI";
import userAPI from "../utils/userAPI";

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
      <section className="border rounded m-4 p-4 bg-light text-center">
        <h2 className="text-center text-capitalize">{`${user.username} wants to trade!`}</h2>
        <div className="d-flex">
          <div>
            <h3 className="text-center">Offering</h3>
            <Card creature={offeredCard} />
          </div>
          <FontAwesomeIcon icon={faArrowsLeftRight} className="align-self-start fs-1" />
          <div>
            <h3 className="text-center">Seeking</h3>
            <Card creature={seekingCard} />
          </div>
        </div>
        {props.matchCards ? (
          <TradeButton
            user1={props.offer.userId}
            card1={props.offer.offeredCardId}
            user2={props.currentUser}
            card2={props.offer.seekingCardId}
          />
        ) : (
          <h4 className="text-center">you don't own the matching card!</h4>
        )}
      </section>
    </>
  );
}
