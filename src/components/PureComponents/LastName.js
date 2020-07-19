import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

export default class PureParent extends React.Component {
//     shouldComponentUpdate(newProps, newState){
//        //return true;
//        return (newProps.lastName !== this.props.lastName)
//     }

     render() {
       console.log("Inside render method of LastName")
       return (
           <div>
              {this.props.lastName}
           </div>
       );
     }
}