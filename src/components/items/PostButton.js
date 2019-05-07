import React, { Component } from "react";

const PostButton = props => {
  let style = {
    width: 40,
    height: 24,
    border: "none",
    background: "white"
  };
  return (
    <button style={style} onClick={() => props.handleClick()}>
      <i class="material-icons">{props.label}</i>
    </button>
  );
};

export default PostButton;
