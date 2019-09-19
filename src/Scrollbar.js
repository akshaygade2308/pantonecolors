import React from 'react';

const Scrollbar = (props) => {
    return(
        <div>
            <div style = {{overflowY:'scroll', height: '150px' }}>
                {props.children}
            </div>
        </div>
    );
}
export default Scrollbar;