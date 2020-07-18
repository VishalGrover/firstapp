import React from "react";
import axios from "axios";


export default class UserDetailComponent extends React.Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
//    this.cbRef = (input) => {
//        this.inputRef = input;
//    };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  componentDidMount(){
//    1.
    console.log(this.inputRef);

  }



  render() {
    return (
        <div>
            Enter Text
           1. <input type="text" ref={this.inputRef}></input>
           <br/>
            2.  <button onClick={this.onSearchSubmit} >Search Image</button>
            <br/>

        </div>
    );
  }

  async onSearchSubmit(event){
      console.log(event.target.value);
        debugger;
      console.log(this.inputRef.current.value);
      const value = this.inputRef.current.value;
      const result = await axios.get("https://api.unsplash.com/search/photos", {
            params : {query: value},
            headers: {
                Authorization: 'Client-ID SzkQw9mm_TTYPAX8ZEwk5e8kuZXjPQk5fPrGPzzMIzU'
            }
      });

      console.log(result);

    }
}