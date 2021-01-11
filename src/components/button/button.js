import React from 'react';

import './button.css';

const Button = (props) => {
    return (
        <div className="buttonContainer">
            <button className="button">{props.buttonName}</button>
        </div>
    )
}

export default Button;