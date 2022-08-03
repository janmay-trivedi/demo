import React, { Component } from "react";

export default class extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <p>Water Level is {this.props.WaterLevel}</p>
        <p>
          {this.props.WaterLevel === "High"
            ? "Do Not Cross the Bridge"
            : "You can go forward with Precaution"}
        </p>
        <p>Today is {this.props.WeekDay}</p>
        <p>{this.props.WeekDay === "Saturday" && "You can wear Formal"}</p>
      </div>
    );
  }
}
