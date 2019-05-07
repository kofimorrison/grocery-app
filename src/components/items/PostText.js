import React from "react";

const PostText = props => {
  let style = {
    width: 150
  };
  return <div style={style}>{props.text}</div>;
};

export default PostText;
