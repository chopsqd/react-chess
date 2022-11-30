import React, {FC} from 'react';
import {Cell} from "../model/Cell";

interface CellProps {
    cell: Cell
}

const CellComponent: FC<CellProps> = ({cell}) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            
        </div>
    );
};

export default CellComponent;