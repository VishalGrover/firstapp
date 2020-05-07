import React from "react";


import UserDetailComponent from './UserDetailComponent';

export default class PositionDisplay extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    /*return (
        <div>
            Your longitude is: {this.props.long}, and latitude is: {this.props.lat}
        </div>
    );*/

//    2.
    return (
            <div>
                Your longitude is: {this.props.long}, and latitude is: {this.props.lat}
                <br/>
                <br/>
                <UserDetailComponent></UserDetailComponent>
            </div>
        );
  }
}