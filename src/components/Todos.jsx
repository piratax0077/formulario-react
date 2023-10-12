import Todo from "./Todo";

const Todos = ({todos, deleteTodo,updateTodo}) => {
    return (
        <div >
            <h1>Todos</h1>
            <ul className="list-group">
                {
                    todos.map((todo, index) => (
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    ))
                }
            </ul>
        </div>
    )
};

export default Todos;