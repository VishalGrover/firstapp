import React from "react";


export default class MenuList extends React.Component {
   constructor(props){
        super(props);
   }

  render() {
  const a = 5;
    const menuOptions = this.props.beverages.map(beverage => {
        return (<tr key={beverage.id}>
                    <td>{beverage.name}</td>
                    <td>{beverage.firstFound}</td>
                    <td className='image'><img src= {beverage.imgSrc} /></td>
                    <td>{beverage.price}</td>
                </tr>)
    });
    return(
        <div>
            <h2> Beverage table </h2>
            <table>
                <thead>
                    <tr>
                       <th>Name</th>
                       <th>Founded In</th>
                       <th style={{width:'30px'}}>Image</th>
                       <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {menuOptions}
                </tbody>
            </table>
        </div>
        );
  }
}