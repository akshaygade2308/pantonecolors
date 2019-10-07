import React, {Component} from 'react';
import './App.css';
import 'tachyons';
import Color from './Color'

class App extends Component{
  constructor(){
      super();
      this.state = {
        selectedColor : {}
      }
      this.getColor = this.getColor.bind(this)
      this.setSelectedColor = this.setSelectedColor.bind(this)
  }

  getColor(Hex){
    this.setState({
      selectedColor : Hex
    })
    console.log(Hex)
  }

  setSelectedColor(selColor){
    this.setState({
      selectedColor : selColor
    })
    /* console.log(this.state.selectedColor) */
  }
  
  render(){
    return(
      <div>
        <Color selectedColor={this.state.selectedColor} consoleColor={this.getColor} noOfColorsToRender = {this.props.noOfColorsToRender || 84} setSelectedColor = {this.setSelectedColor}  widthProp = {this.props.widthProp || 20} heightProp = {this.props.heightProp || 20} />
      </div>
    );

  }
}
export default App;
