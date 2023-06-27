import React from "react";

export class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 ? (
          <span> Your age is {age}</span>
        ) : (
          <span>You are very young!</span>
        )}
      </div>
    );
  }
}
