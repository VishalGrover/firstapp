import React from "react";

import ToggleButton from "./ToggleButton";
import WatchTemplate from "./WatchTemplate";

export default class Layout extends React.Component {

  render() {
    return (
        <div>
            <WatchTemplate name={this.props.name}/>
            <ToggleButton/>
        </div>
    );
  }
}