import { useRef,useState } from "react";
import Swal from 'sweetalert2';

const Formulario = ({addTodo}) => {

    // const [title, setTitle] = useState("")
    // const [description, setDescription] = useState("")
    // const [state, setState] = useState("Completado")

    const [todo, setTodo] = useState({
        title: "",
        description: "",
        priority: false,
    })

    const handleChange = (e) => {
       const {name, type, checked, value} = e.target;
        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
      
        // validar los datos
        if (!todo.title.trim() || !todo.description.trim()) {
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
            });
            return
        }
        // enviar los datos
        addTodo({
            id: Date.now(),
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            state: todo.state
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <h2>Formulario Controlado</h2>
          
            <div className="form-group">
                <label htmlFor="name_job">Nombre Tarea</label>
                <input type="text" name="name_job" id="name_job" value={todo.title} className="form-control mb-2" onChange={(e) => setTodo({...todo, title: e.target.value})} placeholder="Nombre de la tarea" />
            </div>
            <div className="form-group">
                <label htmlFor="description_job">Descripcion</label>
                <textarea className="form-control mb-2" name="description_job" value={todo.description} onChange={(e) => setTodo({...todo, description: e.target.value })} placeholder="Descripcion de la tarea"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="priority" className="form-label">Prioridad</label>
                <input type="checkbox" name="priority" id="priority" checked={todo.priority} onChange={handleChange}/>
            </div>
            <div className="form-group mb-3">
                <select name="state" id="state" value={todo.state} onChange={(e) => setTodo({...todo, state: e.target.value })} className="form-select">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
            </div>
            <input type="submit" value="Registrar" className="btn btn-primary" />
        </form>
    )
}

export default Formulario