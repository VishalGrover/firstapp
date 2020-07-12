import React from 'react';


export default class ChildrenPropComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
            // Please pass some html is props
            return (
            <div>
                Hello {this.props.name}, welcome to React tutorials
                {this.props.children}
            </div>
            );
        }

};
