import React, { useState, useEffect } from "react";
import MarketplaceNav from "../../components/MarketplaceNav";
import BackButton from "../../components/BackButton/BackButton";
import Card from "../../components/Card";
import CreateOfferBtn from "../../components/createOfferBtn";
import userAPI from "../../utils/userAPI";

export default function MyDeck() {
  const [userCards, setUserCards] = useState([]);
  const [userName, setUserName] = useState("");


  useEffect(() => {
    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setUserCards(res.data[0].cards);
      setUserName(res.data[0].username);
    });
  }, []);

  return (
    <>
      <div className="col-12 marketplace-bg">
        <div className="col-12 mx-auto text-center">
          <BackButton />
        </div>
        <h1 className="text-center align-items-center justify-content-center homeTitle">
          {userName}'s Deck
        </h1>
        <MarketplaceNav />
        <div className="d-flex flex-wrap justify-content-center">
          {userCards.map((creature, index) => (
            <>
              <div>
                <Card creature={creature} key={creature.index} />
                <CreateOfferBtn key={index} offeredCreature={creature}/>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
