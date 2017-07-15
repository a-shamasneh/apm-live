import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import D3 from './D3';



class App extends Component {

  constructor (){
    super()
    this.state={locations:[]} //initial data
  }



  componentWillMount(){   
    //this will fireing every time socket emit 
       this.socket = io.connect("http://ec2-34-212-134-187.us-west-2.compute.amazonaws.com:9090");
       this.socket.on('widget:data', data =>
       this.setState({locations:JSON.parse(data.message).Root.BinaryInSet.Entry.splice(0,8)})
      
      // splice array to get first of eight object contains data for two location 
      )
  }

  render() {
    
    console.log(this.state.locations)
    return (
      <div className="App">
         <D3 Apm1={this.state.locations.slice(0,4)}  Apm2={this.state.locations.slice(4,8)}/>
      </div>
      
    );
    // use slice to return first 4 object which mean 4 signal for each of one
  }
}
export default App;
