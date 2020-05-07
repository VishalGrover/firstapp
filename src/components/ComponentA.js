import React from "react";
import { ContextConsumer } from './UserContext';


export default class ComponentA extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.setState("New Value");
  }


  render() {
    return (
        <ContextConsumer>
            {
                (contextState) =>{
                    return (
                        <div>
                            <h3>This is Context A template and we will set the context from here</h3>
                            <button onClick={()=>this.handleClick(contextState)}>change context value</button>
                        </div>
                    );
                }
            }
        </ContextConsumer>
    );
  }
}