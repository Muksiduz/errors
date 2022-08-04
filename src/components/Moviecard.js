import React, { useState } from "react";
import "./Moviecard.css";
import Popup from "./Popup";

export default function Moviecard(props) {
  const [popUp, setPopUp] = useState(false);
  function popedUp() {
    setPopUp(true);
  }
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={props.img} onClick={popedUp} alt="" />
        </div>

        <p className="title">{props.title}</p>
        <p className="genre">{props.genre}</p>
        <p className="year">{props.year}</p>
        {popUp ? (
          <Popup
            title={props.title}
            desc={props.desc}
            img={props.img}
            year={props.year}
          />
        ) : null}
      </div>
    </>
  );
}
