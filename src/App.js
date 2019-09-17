import React, {Component} from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Searchbox from './Searchbox';
import 'tachyons';
// import axios from 'axios';
// import Button from 'antd/es/button';
// import { Popover } from 'antd';
// import Scrollbar from './Scrollbar';
import Color from './Color'


class App extends Component{
  constructor(){
      super();
      this.state = {
        // colors : [],
        // searchfield : '',
        // showHex : false,
        // showColors : false,
        selectedColor : {},

      }
      // this.fetch()
      this.getColor = this.getColor.bind(this)
  }

  // fetch(){
  //   axios
  //     .get('/pantone.json')
  //     .then( response => {
  //       console.log(response.data)
  //     	this.setState({ 
  //         colors: response.data, 
  //       });
  //     })
  //     .catch((err)=> {})
  // }

  // onSearchChange = (event) => {
  //   this.setState({searchfield: event.target.value})
  // }

  // copyHex(){
  //   console.log()
  // }

  // _showHex = () =>{
  //   this.setState({
  //   showHex: !this.state.showHex
  //   });
  // }

  // _showColors = (bool1) =>{
  //   this.setState({
  //     showColors : bool1
  //   });
  // } 

  getColor(Hex){
    this.setState({
      selectedColor : Hex
    })
    console.log(Hex)
  }
  
  render(){
    return(
      <div>
        <Color consoleColor={this.getColor} noOfColorsToRender = {this.props.noOfColorsToRender || 84} widthProp = {this.props.widthProp || 40} heightProp = {this.props.heightProp || 25}></Color>
      </div>
    );

 







  //   const {colors, searchfield} = this.state;
  //   const filteredColors = colors.filter(color => {
  //     return color.name.toLowerCase().includes(searchfield.toLowerCase());
  //   })

  //   const content = (
  //     <div className = "contentdiv">
  //       <Searchbox searchChange = {this.onSearchChange} />
  //         <div className = "topfilter">
  //           <Scrollbar>
  //           {
  //             filteredColors.map(col=>(
  //               <div className = "filterdiv" style={{backgroundColor:col.hexvalue, display: 'inline-block', width : '25px', height : '25px', borderRadius : '3px'}} 
  //               onClick={this._showHex.bind(null, true)}
                  
  //                 >


  //                 -------not reqd----------------
  //                 <button onClick={this._showHex.bind(null, true)}>show</button>
  //                 <button onClick={this._showHex.bind(null, false)}>hide</button>
  //                 -------not reqd----------------



  //                 { this.state.showHex && (<div>{col.hexvalue}</div>) }
  //               </div>
                
  //             ))
  //           } 
  //         </Scrollbar>
  //         </div>
          
  //     </div>
  //   );
  
  // if(colors.length === 0){
  //   return <h1>Loading</h1>
  // }else{
  //   return (
  //       <div>
  //       <div className = "popdiv">
          
  //         <Popover className = "pop" placement="bottom" content={content} trigger="click">
  //           <Button className = "button1">Colors</Button>
  //         </Popover>

  //       </div>
        



  //       -------------not reqd---------
  //       The toogle button
  //       <Button type="primary" onClick={this._showColors.bind(null, true)}>show</Button>
  //       {this.state.showColors && 
  //         (
  //         <div>
  //           <div className = "robdiv">

          
              
  //         </div>
  //         </div>
  //         ) 
  //       } 
  //       -------------not reqd---------




  //     </div>
  //   );
  //   }
  }
}
export default App;
