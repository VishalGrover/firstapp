import React from "react";
import ComponentC from './ComponentC';


export default class ComponentB extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
       <ComponentC></ComponentC>
    );
  }
}