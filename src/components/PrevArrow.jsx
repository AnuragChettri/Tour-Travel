import React from 'react';

const PrevArrow = (props) => {
    const {className, style,onClick } = props;
    return (
        <div 
            className={className}
            style={{...style,
                background: "rgb(10, 0, 0)",
                border: "1px solid red",
                fontSize: "40px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // marginRight: "10px",
                padding: "0px"}}
            onClick ={onClick}
        >
        </div>
    );
}

export default PrevArrow;