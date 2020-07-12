import React from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import { ContextProvider } from './UserContext';


export default class ContextComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            value: 'Default value',
            setState: (newValue) => {
                this.setState({
                    value: newValue
                });
            }
        };
    }

    render(){
        return (
        <div>
            <ContextProvider value={this.state}>
                <ComponentA> </ComponentA>
                  <br/>
                  <ComponentB> </ComponentB>
            </ContextProvider>

        </div>
        );
    }

};
