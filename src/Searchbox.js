import React from 'react'
import './Searchstyle.css'

const Searchbox = ({searchfield, searchChange}) => {

    function reduce(){
        
    }

    return(
        <div className = "searchdiv">
            
            <input 
            className = "pa3 ba b--green bg-lightest-blue" 
            type = "search" 
            placeholder = "search pantone colors"
            onChange = {searchChange}
            >
            </input>
            </div>
        
    )
}
export default Searchbox;