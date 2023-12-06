import React from "react";
import MarketplaceNav from "../../components/MarketplaceNav";
import BackButton from "../../components/BackButton/BackButton";

export default function MyDeck () {
    return (
      <div className="col-12 marketplace-bg">
        <div className="col-12 mx-auto text-center">
          <BackButton />
        </div>
        <h1 className="text-center align-items-center justify-content-center homeTitle">
          My Deck
        </h1>
        <MarketplaceNav />
      </div>
    );
}