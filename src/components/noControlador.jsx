import { useRef,useState } from "react";

const NoControlado = () => {

    const form = useRef(null)

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        // Guardar los datos del formulario
        const data = new FormData(form.current)

        // Recorrer los datos del formulario
        const job = {
            name_job: data.get('name_job'),
            description_job: data.get('description_job'),
            state: data.get('state')
        }

        // validar los datos
        if (!job.name_job.trim() || !job.description_job.trim() || !job.state.trim()) {
            setError("Por favor ingrese todos los datos")
        }
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <h2>Formulario No Controlado</h2>
            {
                error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )
            }
            <div className="form-group">
                <label htmlFor="name_job">Nombre Tarea</label>
                <input type="text" name="name_job" id="name_job" className="form-control mb-2" placeholder="Nombre de la tarea" />
            </div>
            <div className="form-group">
                <label htmlFor="description_job">Descripcion</label>
                <textarea className="form-control mb-2" name="description_job" defaultValue="description1" placeholder="Descripcion de la tarea"></textarea>
            </div>
            <div className="form-group">
                <select name="state" id="state" defaultValue="Completado" className="form-select">
                    <option value="Pendiente">Pendiente</option>
                    <option value="Completado">Completado</option>
                </select>
            </div>
            <input type="submit" value="Registrar" className="btn btn-primary" />
        </form>
    )
}

export default NoControlado