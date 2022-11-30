import {Cell} from "./Cell";
import {Colors} from "./Colors";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        // Задаем строки
        for (let i = 0; i < 8; i++) {
            // Формируем строку
            const row: Cell[] = []
            // Задаем столбцы
            for (let j = 0; j < 8; j++) {
                if((i + j) % 2 !== 0) {
                    // Добавляем черные ячейки
                    row.push(new Cell(this, j, i, Colors.BLACK, null))
                } else {
                    // Добавляем белые ячейки
                    row.push(new Cell(this, j, i, Colors.WHITE, null))
                }
            }
            // Добавляем строки в общую Доску
            this.cells.push(row)
        }
    }
}