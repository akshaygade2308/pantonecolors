import React, { Component } from 'React';

class MyComponent extends Component{
    constructor(){
        super();
        this.state = {
            isShown: true
        }
    }

    toggleIsShown = () =>{
        this.setState(
            ({isShown}) => ({isShown: !isShown})
        );
    }

    render(){
        const {isShown} = this.state;
        return(
            <div>
                <button onClick = {this.toggleIsShown}>Shoe Text</button>
                <div>There goes the Text!</div>
            </div>
        );
    }
}
export default MyComponent;