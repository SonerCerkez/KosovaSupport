import React from "react";

export default function LanguageChange(props) {
  return (
    <div className={`single-language ${props.styles}`} onClick={props.handleLanguageSwitch}>
      {props.img}
      {props.language}
    </div>
  );
}