import React from 'react';
import './App.css';
import Layout from './components/Layout';



export default class App extends React.Component{

    render(){
        const name = 'Vishal';
        return (
        <div className="App">
            <Layout />
        </div>
        );
    }

};
