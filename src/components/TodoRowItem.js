function TodoRowItem(props) {
    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td onClick={() => props.moveTodoDown(props.rowNumber)}>Move Me Down</td>
        </tr>
    )
}

export default TodoRowItem