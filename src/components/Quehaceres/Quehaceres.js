import React, { useState } from 'react'

const Quehaceres = () => {

    const [lista, setlista] = useState([])
    const [tarea, settarea] = useState("")

    const agregartarea = () => {
        const nuevalista = [...lista, {nombre: tarea, estado: false}]
        tarea == "" ? alert("Por favor, no mandar tareas vacias.") : setlista(nuevalista); settarea("")
    }

    const listaExpuesta = lista.map((elem, index) => {
        const tach = () => {
            elem.estado == false ? elem.estado = true : elem.estado = false;
            setlista([...lista])
        }
        const eliminartarea = () => {
            const listaFiltrada = lista.filter(a => a != elem)
            setlista(listaFiltrada)
        }
        return <p>
                
            <div style={{ textDecoration: elem.estado && 'line-through' }}> <b>{elem.nombre}</b> </div>
            
            <input type="checkbox" className="estado" name="estado" onClick={tach} checked={elem.estado}/> 
            
            <button className="btn btn-danger" onClick={eliminartarea}>Delete</button>
        </p>
    })

    return (
        <div>
            <div>
                <button className="btn btn-primary" onClick={agregartarea}>Add</button>
                <input type="text" value={tarea} onChange={(e)=>{settarea(e.target.value)}} />
            </div> <br />
            {listaExpuesta}
        </div>
    )
}

export default Quehaceres