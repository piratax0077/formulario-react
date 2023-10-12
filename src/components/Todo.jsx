const Todo = ({todo, deleteTodo, updateTodo}) => {
    const {title, description, priority,state,id} = todo
   
    return (
       
                <li className="list-group-item">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className={`${priority && "text-decoration-line-through"}`}>{title}</h5>
                            <p className={`${priority && "text-decoration-line-through"}`}>{description}</p>
                            <div className="d-flex gap-2">
                                <button className="btn btn-success btn-sm" onClick={() => updateTodo(id)}>Actualizar</button>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(id)}>Eliminar</button>
                            </div>
                        </div>
                    
                   
                        <span className="badge bg-warning">
                                {
                                    priority && "Prioritario"
                                }
                        </span>
                    </div>
                </li>
            
    )
}

export default Todo;