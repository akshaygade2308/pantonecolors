import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import { Popover } from 'antd';
import Scrollbar from './Scrollbar';
import Searchbox from './Searchbox';
import 'bootstrap/dist/css/bootstrap.css';

const palatte = require(`!raw-loader!./Images/colorplate.svg`);

class Color extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors : [],
            searchfield : '',
            colorsToRender : this.props.noOfColorsToRender,
            
            // showHex : false,
            // showColors : false
        }
        this.fetch()
        // this.colorOnClick = this.colorOnClick.bind(this)
        this.hexToRgb = this.hexToRgb.bind(this)        
    }
  
    fetch(){
        axios
          .get('/pantone.json')
          .then( response => {
            // console.log(response.data)
              this.setState({ 
              colors: response.data, 
            });
          })
          .catch((err)=> {})
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    handleClick(){
        this.setState({
            colorsToRender : this.state.colorsToRender + this.props.noOfColorsToRender
        })
    }

    hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : {};
      }

    // colorOnClick(hex) {
    //     console.log('hex', hex)
    //     // this.props.consoleHex(hex)
    // }

    render(){  
        const {colors, searchfield} = this.state;
        const filteredColors = colors.filter(color => {
        return color.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        const content = (
            <div className = "row">    
                <div className = "contentdiv col-xs-12 col-sm-8"> 
                <div className = "row">
                   <div className = "col-xs-12 col-sm-6" style = {{backgroundColor: '#white', border: '1px black', borderStyle: 'ridge', boxShadow: '4px 6px #C0C0C0', /* borderRadius: '5px' */}}>
                   <Searchbox searchChange = {this.onSearchChange} />
                        <div>
                            <Scrollbar>
                            {
                            filteredColors.slice(0,this.state.colorsToRender).map(col=>(
                                <div className = "filterdiv" title = {col.hexvalue} onWheel = {(e) => this.handleClick(e)} style={{backgroundColor:col.hexvalue, display: 'inline-block', width : this.props.widthProp, height : this.props.heightProp, marginLeft : '7px',
                                    padding : '0px'}} 
                                    onClick={() => this.props.consoleColor(col)}
                                    // onClick={this.props.hexShow}
                                    >
                                    {/* <button onClick={this._showHex.bind(null, true)}>show</button>
                                    <button onClick={this._showHex.bind(null, false)}>hide</button> */}
                                    {/* { this.state.showHex && (<div>{col.hexvalue}</div>) } */}
                                </div>     
                            ))
                            }
                            </Scrollbar>
                        </div>
                    </div>
                    {this.props.selectedColor.hexvalue ? <div className = "col-xs-12 col-sm-2" style = {{marginLeft: '0px', paddingLeft : '30px'}}>
                    <div className = "row" style = {{height: '130px', backgroundColor: this.props.selectedColor.hexvalue || ''}}>
                    </div>

                    <div>
                    <div className = "row" style = {{paddingTop : '10px', justifyContent : 'center', fontSize : '15px', fontFamily : 'sans-serif'}}>
                        {this.props.selectedColor.hexvalue}
                    </div>
                    <div className = "row" style = {{alignItems : 'center', justifyContent : 'center', fontSize : '15px', fontFamily : 'sans-serif'}}>
                        <div style = {{paddingLeft : '2px', display : 'inline-block'}}>r:{this.hexToRgb(this.props.selectedColor.hexvalue) && this.hexToRgb(this.props.selectedColor.hexvalue).r}</div>
                        <div style = {{paddingLeft : '2px', display : 'inline-block'}}>g:{this.hexToRgb(this.props.selectedColor.hexvalue) && this.hexToRgb(this.props.selectedColor.hexvalue).g}</div>
                        <div style = {{paddingLeft : '2px', display : 'inline-block'}}>b:{this.hexToRgb(this.props.selectedColor.hexvalue) && this.hexToRgb(this.props.selectedColor.hexvalue).b}</div>
                    </div>
                    </div>
                </div> : null}
                <div className = "col-xs-12 col-sm-4"></div>
                </div>   
                    {/* <button className = "viewButton" onClick = {() =>this.handleClick()}>View More</button> */}
                </div>
            </div>
        );
        
        // console.log(palatte)
    
        if(colors.length === 0){
            return <h1>Loading</h1>
        }else{
            return (
                <div>
                    <div className = "popdiv" style = {{paddingLeft: '10px', paddingTop: '10px'}}>
                        <Popover className = "pop" placement="bottom" content={content} trigger="click">
                            <div className = "palettediv" dangerouslySetInnerHTML = {{__html : palatte.default}}  /* onClick={() => this.handleClicks()} *//>
                        </Popover>
                    </div>
                </div>
            )
        }
    }
}
export default Color;