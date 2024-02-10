import React from "react";

export const TodoRowItem: React.FC<{
    moveTodoUp(rowNumber: number): void;
    moveTodoDown(rowNumber: number): void;
    rowNumber: number,
    rowDescription: string,
    rowAssigned: string,
    deleteTodo(deleteToDoRowNumber: number): void
}> = (props) => {
    const handleMoveUpClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        props.moveTodoUp(props.rowNumber);
    }
    const handleMoveDownClick = (event: { stopPropagation: () => void; }) => {
        event.stopPropagation();
        props.moveTodoDown(props.rowNumber);
    }

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td onClick={handleMoveDownClick}>Move Me Down</td>
            <td onClick={handleMoveUpClick}>Move Me Up</td>
        </tr>
    )
}
