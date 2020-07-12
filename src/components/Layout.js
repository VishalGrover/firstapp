import React from "react";

import ToggleButton from "./ToggleButton";
import WatchTemplate from "./WatchTemplate";

export default class Vishal extends React.Component {

  render() {
    return (
        <div>
            <WatchTemplate name={this.props.name}/>
            <ToggleButton/>
            Hello world {this.props.name}
        </div>
    );
  }
}