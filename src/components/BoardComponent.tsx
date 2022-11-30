import React, {FC, useEffect, useState} from 'react';
import {Board} from "../model/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../model/Cell";
import {Player} from "../model/Player";

interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    currentPlayer: Player | null
    swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect(() => {
        highlightCells()
    }, [selectedCell])

    function click(cell: Cell) {
        // Если выбрана ячейка
        // Если выбранная ячейка не равняется текущей (нельзя походить туда же, где стоит фигура)
        // Если на выбранную ячейку можно ходить .canMove(для ячейки) --> true
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            // Двигаем фигуру на выбранную ячейку
            selectedCell.moveFigure(cell)
            // Меняем игрока
            swapPlayer()
            // Обнуляем выбранную ячейку
            setSelectedCell(null)
        } else {
            // Условие для выделения только своих фигур
            if (cell.figure?.color === currentPlayer?.color) {
                // Устанавливаем выбранную ячейку
                setSelectedCell(cell)
            }
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell)
        updateBoard()
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <div>
            <h3>Текущий игрок: {currentPlayer?.color}</h3>
            <div className={"board"}>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={click}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    );
};

export default BoardComponent;