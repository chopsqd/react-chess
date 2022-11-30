import {Colors} from "./Colors";
import {Figure} from "./figures/Figure";
import {Board} from "./Board";

export class Cell {
    readonly x: number
    readonly y: number
    readonly color: Colors
    figure: Figure | null
    board: Board
    // Может ли фигура ходить на эту ячейку
    available: boolean
    // Для React ключей
    id: number

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.available = false
        this.id = Math.random()
    }
}