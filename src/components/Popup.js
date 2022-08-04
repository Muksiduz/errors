import React from "react";
import "./Popup.css";

export default function Popup(props) {
  return (
    <div>
      <div className="popup-container">
        <img src={props.img} alt="" />
        <p className="pop-title">{props.title}</p>
        <p className="pop-year">{props.year}</p>
        <p className="pop-desc">{props.desc}</p>
      </div>
    </div>
  );
}
