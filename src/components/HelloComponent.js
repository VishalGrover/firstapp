import React from 'react';


export default class HelloComponent extends React.Component{

    render(){
//        const name = 'Vishal';
        const name = ['Hi', 'there', 1234];
        return (
        <div className="App">
            {name[2]}
        </div>
        );
    }

};
