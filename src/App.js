import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Searchbox from './Searchbox';
import 'tachyons';
import axios from 'axios';

class App extends Component{
  constructor(){
      super();
      this.state = {
        robots : [],
        searchfield : ''
      }
      this.fetch()
  }

  fetch(){
    axios
      .get('/pantone.json')
      .then( response => {
        console.log(response.data)
      	this.setState({ 
          robots: response.data, 
        });
      })
      .catch((err)=> {})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  copyHex(){
    console.log()
  }
  
  render(){
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
  
  if(robots.length === 0){
    return <h1>Loading</h1>
  }else{
    return (
      <div className = "robdiv">
        <Searchbox searchChange = {this.onSearchChange} />
        {/* <div className="row">
          <div className="col-sm-6"> */}
            {
              filteredRobots.map(col=>(
                <div className = "filterdiv" style={{backgroundColor:col.hexvalue}} onClick = {this.copyHex}>{col.name}</div>
              ))
            } 
        </div>
           
      // </div>
      // </div>
      
    );
    }
  }
}
export default App;
