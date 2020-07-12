import React from "react";
import MethodPropChild from './MethodPropChild';

export default class MethodPropParent extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            message: 'Initial message'
        };

        this.clickHandler = this.clickHandler.bind(this);
   }

   clickHandler(){
        this.setState({
            message: "My child component clicked"
        });
   }

  render() {
    return (
        <div>
            <h2>{this.state.message}</h2>
            <MethodPropChild clickHandler={this.clickHandler}></MethodPropChild>
        </div>
    );
  }
}