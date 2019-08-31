import React from 'react';
import './Cell.css';

const Cell = ({cellClass, row, col, width, height, borderCell, marginCell}) => {
    return (
        <div className={cellClass}
             style={{width: width, height: height, borderWidth: borderCell, margin: marginCell}}
        >
        </div>
    )
};
export default Cell;

