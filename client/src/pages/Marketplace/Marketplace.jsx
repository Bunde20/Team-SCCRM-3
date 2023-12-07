import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWandMagicSparkles,
  faBurst,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import cardAPI from "../../utils/cardAPI";
import tradeAPI from "../../utils/tradeAPI";
import userAPI from "../../utils/userAPI";
import Card from "../../components/Card";
import PurchaseBtn from "../../components/PurchaseBtn";
import BackButton from "../../components/BackButton/BackButton";
import MarketplaceNav from "../../components/MarketplaceNav";
import "./Marketplace.css";

export default function Marketplace() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [userCoins, setUserCoins] = useState(0);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await cardAPI.getAllCards();
        const allCards = response.data;

        // Shuffle the cards array
        const shuffledCards = allCards.sort(() => Math.random() - 0.5);

        // Select the first four cards
        const selectedCards = shuffledCards.slice(0, 4);

        setCards(selectedCards);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();

    userAPI.getOneUser(localStorage.getItem("currentUser")).then((res) => {
      setCurrentUser(res.data[0]);
      setUserCoins(res.data[0].coins);
    });
  }, []);

  return (
    <>
      <div className="col-12 marketplace-bg">
        <div className="col-12 mx-auto text-center">
          <BackButton />
        </div>
        <h1 className="text-center align-items-center justify-content-center homeTitle">
          Marketplace
        </h1>
        <MarketplaceNav />
        <h3 className="text-center">COINS: {userCoins}</h3>
        <div className="d-flex justify-content-center flex-row flex-wrap">
          {cards.map((creature, index) => (
            <div key={index}>
              <Card creature={creature} key={creature._id} />
              {userCoins >= creature.coinCost && (
                <PurchaseBtn
                  currentUser={currentUser}
                  creature={creature}
                  userCoins={userCoins}
                  setUserCoins={setUserCoins}
                  key={`PurchaseBtn_${creature._id}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
