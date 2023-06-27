import React from "react";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.incrementInterval);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

class CounterDisplay extends React.Component {
  render() {
    return <h1>Counter: {this.props.count}</h1>;
  }
}
