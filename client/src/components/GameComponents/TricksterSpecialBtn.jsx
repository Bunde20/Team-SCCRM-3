import React, { useState, useEffect } from "react";

export default function TricksterSpecialBtn(props) {

  return (
    <>
      <div className="button-container">
        <button className="rounded purchase-button" onClick={props.onClick}>
          SLEEP!
        </button>
      </div>
    </>
  );
}