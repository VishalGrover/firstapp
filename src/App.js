import React from 'react';
import './App.css';
import Layout from './components/Layout';
import UserDetailComponent from './components/UserDetailComponent';


export default class App extends React.Component{

    render(){
        const name = 'Vishal';
        return (
        <div className="App">
            <UserDetailComponent />
        </div>
        );
    }

};
