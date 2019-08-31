import React, { Component } from 'react';
import cloneDeep from 'clone-deep';
import './App.css';
import Cells from './Cells/Cells';
import Header from './Header/Header';

export default class App extends Component {
    speed = 400;
    rows = 50;
    columns = 50;
    cellSize = 10;
    borderCell = 1;
    marginCell = 1;
    //sizeGameLayout = this.rows * this.columns;

    state = {
        cells: Array(this.rows).fill(Array(this.columns).fill(false))
    };
    componentDidMount() {
        this.buildCells();
        setInterval(() => {
            this.startGame();
        }, this.speed)
    }

    buildCells = () => {
        let newCells = cloneDeep(this.state.cells);
        for (let row = 0; row<this.rows; row++) {
            for (let col = 0; col<this.columns; col++) {
                newCells[row][col] = (Math.floor(Math.random() * 2)) === 1 ? true : false;
            }
        }
        this.setState({
            cells: newCells
        });
    };

    resetGame = () => {
        this.setState({
            cells: Array(this.rows).fill(Array(this.columns).fill(false))
        })
    };

    runAction() {
        return [
            {title: 'start', action: () => this.buildCells()},
            {title: 'reset', action: () => this.resetGame()}
        ]
    }

    gameRules = (row, col, cells) => {
        let counter = 0;
        if (row > 0 && cells[row - 1][col]) counter++;
        if (row > 0 && col > 0 && cells[row - 1][col - 1]) counter++;
        if (row > 0 && col < this.columns - 1 && cells[row - 1][col + 1]) counter++;
        if (col < this.columns - 1 && cells[row][col + 1]) counter++;
        if (col > 0 && cells[row][col - 1]) counter++;
        if (row < this.rows - 1 && cells[row + 1][col]) counter++;
        if (row < this.rows - 1 && col > 0 && cells[row + 1][col - 1]) counter++;
        if (row < this.rows - 1 && col < this.columns - 1 && cells[row + 1][col + 1]) counter++;
        return counter;
    };

    startGame = () => {
        let currentCells = this.state.cells,
            newCells = cloneDeep(this.state.cells);

        for (let row = 0; row<this.rows; row ++) {
            for (let col = 0; col<this.columns; col++) {
                let counter = this.gameRules(row, col, currentCells);

                if (currentCells[row][col] && (counter < 2 || counter > 3)) {
                    newCells[row][col] = false;
                }
                if (!currentCells[row][col] && counter === 3) {
                    newCells[row][col] = true;
                }
            }
        }
        this.setState({
            cells: newCells
        })
    };

    render() {
        const action = this.runAction();
        return (
            <div className="App">
                <Header
                    action = {action}
                />
                <Cells
                    cells={this.state.cells}
                    rows={this.rows}
                    columns={this.columns}
                    cellSize={this.cellSize}
                    borderCell={this.borderCell}
                    marginCell={this.marginCell}
                />
            </div>
        );
    }
}
