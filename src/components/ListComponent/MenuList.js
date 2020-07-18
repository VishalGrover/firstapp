import React from "react";
import ShowBeverage from "./ShowBeverage";
import coffeesrc from "./coffee.jpg";
import milksrc from "./milk.jpg";
import teasrc from "./tea.jpg";

export default class MenuList extends React.Component {
   constructor(props){
        super(props);
        this.complexOptions = [
            {
                id: 'a1',
                name: 'Coffee',
                firstFound: '15th Century',
                imgSrc: coffeesrc,
                price: '150 INR'
            },
            {
                id: 'a2',
                name: 'Tea',
                firstFound: '2737 BCE',
                imgSrc: teasrc,
                price: '100 INR'
            },
            {
                id: 'a3',
                name: 'Milk',
                firstFound: '4500 BC',
                imgSrc: milksrc,
                price: '100 INR'
            }
        ];

   }

   render() {
       return <ShowBeverage beverages={this.complexOptions} />
     }

//  render() {
//    const menuOptions = ['Coke','Coffee', 'Tea', 'Milk'];
//    return (
//        <ul>
//            {
//                menuOptions.map(option => <li key={option}>{option}</li>)
//            }
//        </ul>
//    );
//  }
}