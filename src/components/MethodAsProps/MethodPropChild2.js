import React from "react";

export default class MethodPropChild2 extends React.Component {

  constructor(props){
          super(props);
  }

  render() {
    return (
        <div>
            <button onClick={this.props.clickHandler}>Call parent method</button>
        </div>
    );
  }
}