import React from "react";
import MethodPropChild2 from './MethodPropChild2';

export default class MethodPropChild extends React.Component {

  constructor(props){
          super(props);
  }

  render() {
    return (
        <MethodPropChild2 clickHandler={this.props.clickHandler} />
    );
  }
}