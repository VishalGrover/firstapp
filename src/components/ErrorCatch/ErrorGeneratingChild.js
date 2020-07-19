import React from "react";

export default class ErrorGeneratingChild extends React.Component {

  render() {
    if(this.props.name === ''){
        throw new Error('Name can not be blank');
    }
    return (
        <div>
            <h2>{this.props.name}</h2>
        </div>
    );
  }
}