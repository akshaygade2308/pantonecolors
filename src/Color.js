import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Button from 'antd/es/button';
import { Popover } from 'antd';
import Scrollbar from './Scrollbar';
import Searchbox from './Searchbox';
const palatte = require(`!raw-loader!./Images/colorplate.svg`)

class Color extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors : [],
            searchfield : '',
            colorsToRender : this.props.noOfColorsToRender
            // showHex : false,
            // showColors : false
        }
        this.fetch()
        // this.colorOnClick = this.colorOnClick.bind(this)
    }

    // componentWillReceiveProps(np) {
    //     if (this.props.selectedColor !== np.selectedColor) console.log('selectedColor', np.selectedColor)
    // }

    
    fetch(){
        axios
          .get('/pantone.json')
          .then( response => {
            console.log(response.data)
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
        <div className = "contentdiv">
            
                   
            <Searchbox searchChange = {this.onSearchChange} />
            <div className = "topfilter">
                <Scrollbar>
                {   
                filteredColors.slice(0,this.state.colorsToRender).map(col=>(
                    <div className = "filterdiv" style={{backgroundColor:col.hexvalue, display: 'inline-block', width : '25px', height : '25px', borderRadius : '3px', marginLeft : '7px',
                        boxShadow : '3px 2px 2px gray'}} 
                        onClick={() => this.props.consoleColor(col)}
                    // onClick={this.props.hexShow}
                    >
                    {/* <button onClick={this._showHex.bind(null, true)}>show</button>
                    <button onClick={this._showHex.bind(null, false)}>hide</button> */}
                    {/* { this.state.showHex && (<div>{col.hexvalue}</div>) } */}
                    </div>

                ))
                }
                <button onClick = {() =>this.handleClick()}>View More</button>
                </Scrollbar>
            </div>
            
        </div>
        );
    console.log(palatte)
    
    if(colors.length === 0){
        return <h1>Loading</h1>
    }else{
        return (
            <div>
            <div className = "popdiv">
            
            <Popover className = "pop" placement="bottom" content={content} trigger="click">
                <div className = "palettediv" dangerouslySetInnerHTML = {{__html : palatte.default}} />
            </Popover>

            </div>
            </div>
        )
    }
}
}

export default Color;