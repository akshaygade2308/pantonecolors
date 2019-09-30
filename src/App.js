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
  }

  getColor(Hex){
    this.setState({
      selectedColor : Hex
    })
    console.log(Hex)
  }
  
  render(){
    return(
      <div>
        <Color selectedColor={this.state.selectedColor} consoleColor={this.getColor} noOfColorsToRender = {this.props.noOfColorsToRender || 84} widthProp = {this.props.widthProp || 20} heightProp = {this.props.heightProp || 20} />
      </div>
    );

  }
}
export default App;
