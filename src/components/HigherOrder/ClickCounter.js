import React from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends React.Component {

//  constructor(props){
//    super(props);
//    this.state = {
//        count : 0
//    };
//  }
//
//  incrementCounter = () =>{
//    this.setState(prevState =>{
//        return {count : prevState.count + 1};
//    });
//  }
//
//  render() {
//    const count = this.state.count;
//    return (
//        <button onClick={this.incrementCounter}>
//           Clicked {count} times
//        </button>
//    );
//  }

  render() {
    const {count, incrementCounter} = this.props;
    return (
        <button onClick={incrementCounter}>
           Clicked {count} times
        </button>
    );
  }



}

export default WithCounter(ClickCounter, 5);


//render() {
//  const {count, incrementCounter} = this.props;
//  return (
//      <button onClick={incrementCounter}>
//         Clicked {count} times
//      </button>
//  );
//}
//
//export default WithCounter(ClickCounter);