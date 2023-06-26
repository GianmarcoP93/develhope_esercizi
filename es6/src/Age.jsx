import React from "react";

export class Age extends React.Component {
  render() {
    const { age } = this.props;

    return <span> Your age is {age}</span>;
  }
}
