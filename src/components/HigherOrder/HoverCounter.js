import React from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends React.Component {

//  constructor(props){
//    super(props);
//    this.state = {
//        count : 0
//    };
//  }
//
//  incrementCounter = () =>{
//    this.setState(prevState =>{
//            return {count : prevState.count + 1};
//        });
//  }
//
//  render() {
//    const count = this.state.count;
//    return (
//        <h2 onMouseOver={this.incrementCounter}>Hovered {count} times</h2>
//    );
//  }

  render() {
    const {count, incrementCounter} = this.props;
    return (
        <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
    );
  }


}

//export default HoverCounter;




//
export default WithCounter(HoverCounter, 10);