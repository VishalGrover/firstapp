import React from 'react';
import './App.css';
import Layout from './components/Layout';
import HelloComponent from './components/HelloComponent';


export default class App extends React.Component{

    render(){
        const name = 'Vishal';
        return (
        <div className="App">
            <Layout name='Vishal'>

            </Layout>
        </div>
        );
    }

};
