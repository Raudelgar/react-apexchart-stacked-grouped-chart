import React, { Component } from "react";
import "./App.css";
import StackedBar from "./component/stackedBar";

class App extends Component {
  render() {
    return (
      <div className="container">
        <StackedBar />
      </div>
    );
  }
}

export default App;
