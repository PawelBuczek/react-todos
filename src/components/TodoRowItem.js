function TodoRowItem(props) {
    const handleMoveUpClick = (event) => {
        event.stopPropagation();
        props.moveTodoUp(props.rowNumber);
    }
    const handleMoveDownClick = (event) => {
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

export default TodoRowItem;
