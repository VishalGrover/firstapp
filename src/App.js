import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import LongLatComponent from './components/LongLatComponent';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import { ContextProvider } from './components/UserContext';

//function App() {
//    const name = 'Vishal';
////    return (
////        <div className="App">
////          <Layout name={name}></Layout>
////          <br/>
////          <LongLatComponent> </LongLatComponent>
////        </div>
////      );
//}

export default class App extends React.Component{
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
        <div className="App">
            <ContextProvider value={this.state}>
                <ComponentA> </ComponentA>
                  <br/>
                  <ComponentB> </ComponentB>
            </ContextProvider>

        </div>
        );
    }

};
