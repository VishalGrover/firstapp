import React from "react";


export default class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };

    //This binding is necessary to make `this` work in callback
       this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
      this.setState(function(prevState){
        return {
            isToggleOn: !prevState.isToggleOn
        };
      },
      () => {
        console.log("the updated value of toggleOn: " + this.state.isToggleOn);
      });
      //setState method takes two function as input
      // 1. Action need to taken
      // 2. Callback after action is taken
      console.log("the stale va lue of toggleOn: " + this.state.isToggleOn);
  }

    handleClick(){
        console.log(this.state.isToggleOn);
    }



  render() {
    return (
        <div>
            <h3>Now this is a basic toggle button</h3>
          <button onClick={this.handleClick}>
              {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        </div>
    );
  }
}