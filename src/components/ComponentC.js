import React from "react";
import { ContextConsumer } from './UserContext';

export default class ComponentB extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
       <ContextConsumer>
            {
                (stateObject) => {
                    return <div>The value is {stateObject.value}</div>
                }
            }
       </ContextConsumer>
    );
  }
}

