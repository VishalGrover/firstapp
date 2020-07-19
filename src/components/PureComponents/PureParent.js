import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

export default class PureParent extends React.Component {
   constructor(props){
        super(props);

        this.state = {
            firstName: 'Vishal',
            lastName: 'Grover'
        };
   }

   componentDidMount(){
        setTimeout(()=> {
            this.setState({
                firstName: 'Dhairya'
            });
        }, 5000);
   }


  render() {
    console.log('Inside render of Pure Parent');
    return (
        <div>
            <h2>Displaying the Name:</h2>
            <FirstName firstName={this.state.firstName}/>
            <LastName lastName={this.state.lastName}/>
        </div>
    );
  }

  /*
    comparison of primitive
        1. String, 2. Boolean, 3. Number
     Comparison of Object and Array
        const a = [1,2,3,4];
        const b = [1,2,3,4];
        const c = a;

        a === c // true
        a === b //false
  */
}