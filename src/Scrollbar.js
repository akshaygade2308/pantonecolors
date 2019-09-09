import React from 'react';

const Scrollbar = (props) => {
    return(
        <div style = {{overflowY:'scroll', height: '200px', marginLeft: '20px'}}>
            {props.children}
        </div>
    );
}

export default Scrollbar; 