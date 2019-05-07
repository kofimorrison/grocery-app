import React from "react";
import PostList from "../src/components/items/PostList";
import Header from "./components/layout/Header";
import "../node_modules/materialize-css/dist/css/materialize.min.css";

class App extends React.Component {
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

  addItem() {
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

  render() {
    return (
      <div>
        <Header branding="Grocery App" />
        <div className="container">
          <div class="row">
            <div class="col s12">
              <div id="main" class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="input-field col s12">
                      <input
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                      />
                      <button className="btn" onClick={() => this.addItem()}>
                        Submit
                      </button>
                    </div>
                  </div>
                  <PostList
                    postList={this.state.items}
                    updateScore={this.updateScore.bind(this)}
                    removeItem={this.removeItem.bind(this)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
