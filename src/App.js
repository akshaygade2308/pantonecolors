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
        searchfield : '',
        showHex : false
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

  _showHex = (bool) =>{
    this.setState({
    showHex: bool
    });
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
                <div className = "filterdiv" style={{backgroundColor:col.hexvalue}} onClick = {this._showHex.bind(null, true)}>{col.name}
                  {/* <button onClick={this._showHex.bind(null, true)}>show</button>
                  <button onClick={this._showHex.bind(null, false)}>hide</button> */}
                  { this.state.showHex && (<div>{col.hexvalue}</div>) }
                </div>
                
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
