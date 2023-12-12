import React, { useState, useEffect } from "react";

export default function AttackBtn(props) {

  return (
    <>
      <div className="button-container">
        <button className="rounded purchase-button" onClick={props.onClick} disabled={props.disabled}>
          ATTACK!
        </button>
      </div>
    </>
  );
}