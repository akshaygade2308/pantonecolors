import React from 'react';

const Scrollbar = (props) => {
    return(
        <div style = {{overflowY:'scroll', border: '0.5px solid black', height: '400px', marginLeft: '20px'}}>
            {props.children}
        </div>
    );
}

export default Scrollbar; 