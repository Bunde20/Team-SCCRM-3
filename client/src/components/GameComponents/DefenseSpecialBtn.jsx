import React, { useState, useEffect } from "react";

export default function DefenseSpecialBtn(props) {

  return (
    <>
      <div className="button-container">
        <button className="rounded purchase-button" onClick={props.onClick}>
          HEAL!
        </button>
      </div>
    </>
  );
}