import React from 'react';

const Scrollbar = (props) => {
    return(
        <div style = {{overflowY:'scroll', height: '150px', float : 'left' }}>
            {props.children}
        </div>
    );
}
export default Scrollbar;