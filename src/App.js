import React, {Component} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Searchbox from './Searchbox';
import 'tachyons';
import axios from 'axios';
import Button from 'antd/es/button';
import { Popover } from 'antd';
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

  _showHex = () =>{
    this.setState({
    showHex: !this.state.showHex
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

    const content = (
      <div className = "contentdiv">
        <Searchbox searchChange = {this.onSearchChange} />
          <div className = "topfilter">
            <Scrollbar>
            {
              filteredRobots.map(col=>(
                <div className = "filterdiv" style={{backgroundColor:col.hexvalue, display: 'inline-block', width : '25px', height : '25px', borderRadius : '3px'}} 
                  onClick = {this._showHex.bind(null, true)}
                  
                  >
                  {/* <button onClick={this._showHex.bind(null, true)}>show</button>
                  <button onClick={this._showHex.bind(null, false)}>hide</button> */}
                  { this.state.showHex && (<div>{col.hexvalue}</div>) }
                </div>
                
              ))
            } 
          </Scrollbar>
          </div>
          
      </div>
    );
  
  if(robots.length === 0){
    return <h1>Loading</h1>
  }else{
    return (
        <div>
        <div className = "popdiv">
          
          <Popover className = "pop" placement="bottom" content={content} trigger="click">
            <Button className = "button1">Bottom</Button>
          </Popover>
          
        </div>
        

        {/* The toogle button */}
        {/* <Button type="primary" onClick={this._showColors.bind(null, true)}>show</Button>
        { this.state.showColors && 
          (
          <div>
            <div className = "robdiv">

          
              
          </div>
          </div>
          ) 
        }   */}
      </div>
    );
    }
  }
}
export default App;
