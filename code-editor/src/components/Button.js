import React from 'react'

function Button(props) {
    const btnStyle = {
        maxWidth: "140px",
        minWidth: "80px",
        height: "30px",
        marginRight: "5px",
    }

    return (
        <div>
            <button style={btnStyle} onClick={props.onClick}>{props.title}</button>
        </div>
    )
};

export default Button;
