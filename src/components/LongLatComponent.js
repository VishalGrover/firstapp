import React from "react";

import PositionDisplay from './PositionDisplay';

export default class LongLatComponent extends React.Component {

  constructor(){
        super();
        this.state = {
            long: null,
            lat: null,
            errorMessage: ''
        };



    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
                              (position) => {console.log(position);
                                            this.setState({lat: position.coords.latitude,
                                                            long: position.coords.longitude})},
                              (err) => {
                                            console.log(err);
                                            this.setState({errorMessage: err.message})
                                        }
                          );
    }



  render() {

//    return (
//        <div>
//           <h1> Hello there, </h1>
//           Your longitude is: {this.state.long}, and latitude is: {this.state.lat}
//        </div>
//    );

//    2.
//    return (
//        <div>
//           <h1> Hello there, </h1>
//            <PositionDisplay {...this.state}></PositionDisplay>
//        </div>
//    );

//    3.
    if (this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
        return <div>
                    <h1> Hello there, </h1>
                    <PositionDisplay {...this.state}></PositionDisplay>
               </div>;
    }
    return <div>Loading!</div>;


  }
}