import React, { useEffect, useState } from "react";
import Card from "./Card";
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
      <section className="border rounded m-4 p-4 bg-light">
        <h2 className="text-center text-capitalize">{`${user.username} wants to trade!`}</h2>
        {props.matchCards ? (
          <h4 className="text-center">you own the matching card!</h4>
        ) : (
          <h4 className="text-center">you don't own the matching card!</h4>
        )}
        <div className="d-flex">
          <div>
            <h3 className="text-center">Offering</h3>
            <Card creature={offeredCard} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-left-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <div>
            <h3 className="text-center">Seeking</h3>
            <Card creature={seekingCard} />
          </div>
        </div>
      </section>
    </>
  );
}
