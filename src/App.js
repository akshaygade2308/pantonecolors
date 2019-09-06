import React, {Component} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Searchbox from './Searchbox';
import 'tachyons';
import axios from 'axios';
import Button from 'antd/es/button';

import Scrollbar from './Scrollbar'

class App extends Component{
  constructor(){
      super();
      this.state = {
        robots : [],
        searchfield : '',
        showHex : false,
        showColors : false
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

  _showColors = (bool1) =>{
    this.setState({
      showColors : bool1
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
        <div>
        
        {/* The toogle button */}
        <Button type="primary" onClick={this._showColors.bind(null, true)}>show</Button>
        { this.state.showColors && 
          (
          <div>
            <div className = "robdiv">

          <Searchbox searchChange = {this.onSearchChange} />
          {/* <div className="row">
            <div className="col-sm-6"> */}
            <Scrollbar>
              {
                filteredRobots.map(col=>(
                  <div className = "filterdiv" style={{backgroundColor:col.hexvalue, display: 'inline-block', width : '25px', height : '25px'}} /* onClick = {this._showHex.bind(null, true)} */>
                    {/* <button onClick={this._showHex.bind(null, true)}>show</button>
                    <button onClick={this._showHex.bind(null, false)}>hide</button> */}
                    { this.state.showHex && (<div>{col.hexvalue}</div>) }
                  </div>
                  
                ))
              } 
            </Scrollbar>
              
          </div>
          </div>
          ) 
        }

        
      </div>
      // </div>
      // </div>
      
    );
    }
  }
}
export default App;
