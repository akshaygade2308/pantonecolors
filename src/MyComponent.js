import React, { Component } from 'react';

class MyComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            isShown : true
        }
    }

    toggleIsShown = () =>{
        this.setState({isShown : !isShown});
    }
    
    render(){
        const {isShown} = this.state;
        return(
            <div>
                <button onClick = {this.toggleIsShown}>Toggle</button>
                <div>Text is seen</div>
            </div>
        )
    }
}
export default MyComponent;