import React from "react";


export default class UserDetailComponent extends React.Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = (input) => {
        this.inputRef = input;
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
//    1.
    console.log(this.inputRef);

  }



  render() {
    return (
        <div>
            please enter your name
           1. <input type="text" ref={this.cbRef}></input>
           <br/>
            2.  <input type="text" onChange={this.onInputChange} ></input>
        </div>
    );
  }

  onInputChange(event){
      console.log(event.target.value);
      this.cbRef(event.target);
      console.log(this.inputRef.value);
      const value = event.target.value;
      let url = new URL('https://api.unsplash.com/search/photos');
      let params = {
                       'query': event.target.value
                   };
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      const result = fetch(url,{
          'headers': {
              'Authorization': 'Client-ID SzkQw9mm_TTYPAX8ZEwk5e8kuZXjPQk5fPrGPzzMIzU'
          }
      });

    }
}