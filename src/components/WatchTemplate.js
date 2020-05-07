import React from "react";

export default class WatchTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date : new Date()
    };

    setInterval(
          () => this.tick(),
          1000
    );
  }

// 10.  componentDidMount(){
//          setInterval(
//              () => this.tick(),
//              1000
//          );
//  }


    tick(){
        this.setState({
            date: new Date()
        });
      }


  render() {
// 2.  const name = "Vishal Shafi";
// 3.  const name = ['Hi', 'there, 1234];
// 7.   this.props.name = "Amanda";
    return (<div>
      <h1>Hello {this.props.name}</h1>
      <h2>The time is {this.state.date.toLocaleTimeString()}</h2>
          <h3>And this is coming from Time template</h3>
    </div>
    );
  }
}