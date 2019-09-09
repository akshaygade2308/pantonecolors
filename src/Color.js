import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Button from 'antd/es/button';
import { Popover } from 'antd';
import Scrollbar from './Scrollbar';
import Searchbox from './Searchbox';

class Color extends Component{
    constructor(){
        super();
        this.state = {
            colors : [],
            searchfield : '',
            showHex : false,
            // showColors : false
        }
        this.fetch()
    }

    
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
                filteredColors.map(col=>(
                    <div className = "filterdiv" style={{backgroundColor:col.hexvalue, display: 'inline-block', width : '25px', height : '25px', borderRadius : '3px'}} 
                    // onClick={this._showHex.bind(null, true)}
                    
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
    
    if(colors.length === 0){
        return <h1>Loading</h1>
    }else{
        return (
            <div>
            <div className = "popdiv">
            
            <Popover className = "pop" placement="bottom" content={content} trigger="click">
                <Button className = "button1">Colors</Button>
            </Popover>

            </div>
            </div>
        )
    }
}
}

export default Color;