import TodoRowItem from "./TodoRowItem"

function TodoTable(props) {
    return (
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='column'>#</th>
                    <th scope='column'>Description</th>
                    <th scope='column'>Assigned</th>
                    <th scope='column'>Move Down</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                        deleteTodo={props.deleteTodo}
                        moveTodoDown={props.moveTodoDown}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable