import React, { useState } from "react";
import Backdrop from "../Backdrop";
import "./Moviecard.css";
import Popup from "./Popup";

export default function Moviecard(props) {
  const [popup, setPopup] = useState(false);
  function popedUp() {
    setPopup(true);
  }
  function popedBackdrop() {
    setPopup(null);
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
        {popup ? (
          <Popup
            title={props.title}
            desc={props.desc}
            img={props.img}
            year={props.year}
          />
        ) : null}
      </div>
      {popup ? <Backdrop onClick={popedBackdrop} /> : null}
    </>
  );
}
