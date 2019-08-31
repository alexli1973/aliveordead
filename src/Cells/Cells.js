import React, { Component } from 'react';
import './Cells.css';
import Cell from '../Cell/Cell';

export default class Cells extends Component {
    render() {
        const {cells, rows, columns, cellSize, borderCell, marginCell} = this.props;
        const width = columns * (cellSize + 2 * (borderCell + marginCell));
        const height = rows * (cellSize + 2 * (borderCell + marginCell));
        const cellRows = [];

        let cellClass = '';
        let cellId = '';

        for (let row = 0; row<rows; row++) {
            for (let col = 0; col<columns; col++) {
                cellId = `${row}_${col}`;
                cellClass = cells[row][col] ? 'cell alive' : 'cell dead';
                cellRows.push(
                    <Cell
                        cellClass={cellClass}
                        key={cellId}
                        row={row}
                        col={col}
                        width={cellSize}
                        height={cellSize}
                        borderCell={borderCell}
                        marginCell={marginCell}
                    />
                )
            }
        }
        return (
            <div className='cells-grid' style={{width: width, height: height}}>
                {cellRows}
            </div>
        );
    }
}

