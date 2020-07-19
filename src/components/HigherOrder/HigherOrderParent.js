import React from "react";
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

export default class HigherOrderParent extends React.Component {
   constructor(props){
        super(props);

   }




  render() {
    return (
        <div>
        <ClickCounter name= "Vishal" />
                <HoverCounter />
        </div>

    );
  }
}