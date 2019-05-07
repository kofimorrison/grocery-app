import React, { Component } from "react";

class addItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      items: []
    };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  addItems() {
    let itemsCopy = this.state.items.slice();
    let truncatedString = this.state.value.substring(0, 20);
    itemsCopy.push({ title: truncatedString, score: 0 });
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy, value: "" });
  }

  updateScore(index, val) {
    let itemsCopy = this.state.items.slice();
    itemsCopy[index].score += val;
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }

  removeItem(index) {
    var itemsCopy = this.state.items.slice();
    itemsCopy.splice(index, 1);
    itemsCopy.sort((a, b) => {
      return b.score - a.score;
    });
    this.setState({ items: itemsCopy });
  }
}

export default addItem;
