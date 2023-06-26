import React from "react";

export class Age extends React.Component {
  render() {
    const { age } = this.props;

    return age > 18 && <span> Your age is {age}</span>;
  }
}
