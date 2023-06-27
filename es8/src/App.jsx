import React from "react";
import { Counter } from "./es15";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Counter initialValue={0} incrementBy={1} incrementInterval={1000} />
        </h1>
      </div>
    );
  }
}
