import React, { Component } from "react";
import { getTodos } from "../services/Api";

export default class App extends Component {
  state = {
    response: null
  };

  componentDidMount() {
    getTodos().then((response) =>
      this.setState({
        response
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
