import React from "react";
import { Counter } from "./es13";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={0} incrementBy={1} incrementInterval={1000} />
      </div>
    );
  }
}
