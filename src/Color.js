import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
// import Button from 'antd/es/button';
import { Popover } from 'antd';
import Scrollbar from './Scrollbar';
import Searchbox from './Searchbox';
// import AOS from 'aos';
// import '../node_modules/aos/dist/aos.css'; 
const palatte = require(`!raw-loader!./Images/colorplate.svg`);

class Color extends Component{
    constructor(props){
        super(props);
        // AOS.init();
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

    // componentWillMount (){ 
    //     AOS.refresh(); 
    // } 

    // componentWillReceiveProps(np) {
    //     if (this.props.selectedColor !== np.selectedColor) console.log('selectedColor', np.selectedColor)
    // }

    
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

    // colorOnClick(hex) {
    //     console.log('hex', hex)
    //     // this.props.consoleHex(hex)
    // }

    // componentWillMount = props => {
    //     this.clickTimeout = null
    //   }
      
    //   handleClicks = () => {
    //     if (this.clickTimeout !== null) {
    //       console.log('double click executes')
    //       clearTimeout(this.clickTimeout)
    //       this.clickTimeout = null
    //     } else {
    //       console.log('single click')  
    //       this.clickTimeout = setTimeout(()=>{
    //       console.log('first click executes ')
    //       clearTimeout(this.clickTimeout)
    //         this.clickTimeout = null
    //       }, 2000)
    //     }
    //   }


    render(){
        
        const {colors, searchfield} = this.state;
        const filteredColors = colors.filter(color => {
        return color.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        const content = (
        <div className = "contentdiv">
            
                   
            <Searchbox searchChange = {this.onSearchChange} />
            {/* <div data-aos="fade-up"> */}
            <div className = "row">
                <div className="col-sm-6">
                    <div className = "topfilter">
                <Scrollbar>
                 
                {   
                filteredColors.slice(0,this.state.colorsToRender).map(col=>(
                    
                        <div className = "filterdiv" title = {col.hexvalue} onWheel = {(e) => this.handleClick(e)} style={{backgroundColor:col.hexvalue, display: 'inline-block', width : this.props.widthProp, height : this.props.heightProp, borderRadius : '3px', marginLeft : '7px',
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
                
                
                </Scrollbar>
                {/* </div> */}
            </div>
                </div>
            </div>
                
                <br></br>
            {/* <button className = "viewButton" onClick = {() =>this.handleClick()}>View More</button> */}
        </div>
        );
    // console.log(palatte)
    
    if(colors.length === 0){
        return <h1>Loading</h1>
    }else{
        return (
            <div>
            <div className = "popdiv">
            
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