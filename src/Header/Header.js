import React from 'react';
import './Header.css';
import Button from "../UI/Button/Button";

const Header  = props => {
    let actionButtons = props.action.map(action => {
       return <Button action = {action}/>
    });
    return(
      <div className='header'>
          <div className='buttons-container'>
              {actionButtons}
          </div>
      </div>
  )
};
export default Header;
