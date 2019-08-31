import React from 'react';
import './Button.css'


const Button = props => {
    const {title, action} = {...props.action};
    return(
        <button className='game-button' onClick={action}>
            {title}
        </button>
    );
};
export default Button;
