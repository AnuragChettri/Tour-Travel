import React from 'react';

const NextArrow = (props) => {
    const {className, style,onClick } = props;
    return (
        <div 
            className={className}
            style={{...style,
                background: "rgb(10, 0, 0)",
                border: "1px solid red",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0px"}}
            onClick ={onClick}
        >
        </div>
    );
}

export default NextArrow;