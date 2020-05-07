import React from "react";


export default class ToggleButton extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: true,
    };

    //This binding is necessary to make `this` work in callback
    //   this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
      this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
      }));
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