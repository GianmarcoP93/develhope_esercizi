import React from "react";

export class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <p>Welcome, {name}!</p>
        {age > 18 && age < 65 && name === "John" && (
          <span> Your age is {age}</span>
        )}
      </div>
    );
  }
}
