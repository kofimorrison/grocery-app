import React, { Component } from "react";
import PostText from "./PostText";
import PostButton from "./PostButton";

const AddItem = props => {
  let style = {
    display: "flex"
  };

  return (
    <div style={style}>
      <PostButton label="close" handleClick={props.removeItem} />
      <PostText text={props.title} style={{ width: 500 }} />
      <PostButton label="thumb_up" handleClick={props.incrementScore} />
      <PostText text={props.score} style={{ width: 10 }} />
      <PostButton label="thumb_down" handleClick={props.decrementScore} />
    </div>
  );
};

export default AddItem;
