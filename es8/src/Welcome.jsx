import React from "react";

export class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>
        {this.props.age && <span> Your age is {age}</span>}
      </div>
    );
  }
}
