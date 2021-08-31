import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      minLength={props.minlength}
      required={props.required}
    />
  );
}

export default Input;
