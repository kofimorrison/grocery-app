import React from "react";
import AddItem from "./AddItem";

const PostList = props => {
  return (
    <ol>
      {props.postList.map((item, index) => (
        <AddItem
          key={index}
          title={item.title}
          score={item.score}
          incrementScore={() => props.updateScore(index, 1)}
          decrementScore={() => props.updateScore(index, -1)}
          removeItem={() => props.removeItem(index)}
        />
      ))}
    </ol>
  );
};

export default PostList;
