import React from "react";

function Button(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default Button;
