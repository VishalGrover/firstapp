import React from "react";

export default class FirstName extends React.Component {

  render() {
    console.log("Inside render method of FirstName")
    return (
        <div>
           {this.props.firstName}
        </div>
    );
  }
}