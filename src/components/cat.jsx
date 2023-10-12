import { useState } from "react"



const Cat = () => {
    //State of Cat
    const [cat, setCat] = useState({name:'Dexter', year: 5})

    //Aumentar
    const AddClick = () => {
        setCat({...cat,year: cat.year + 1})
    }

    const lessClick = () => {
        setCat({...cat, year: cat.year - 1})
    }
    
    return (
        <>
            <p>{cat.name} - {cat.year}</p>
            <button className="btn btn-primary me-3" onClick={AddClick}>Aumentar</button>
            <button className="btn btn-danger" onClick={lessClick}>Reducir</button>
        </>
    )

}

export default Cat