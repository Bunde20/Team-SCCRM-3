import React, { useState, useEffect } from "react";

export default function AttackSpecialBtn(props) {

  return (
    <>
      <div className="button-container">
        <button className="rounded purchase-button" onClick={props.onClick}>
          SPECIAL ATTACK!
        </button>
      </div>
    </>
  );
}