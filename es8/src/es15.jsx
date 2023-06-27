import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state) => ({
        count: state.count + this.props.incrementBy,
      }));
    }, this.props.incrementInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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
