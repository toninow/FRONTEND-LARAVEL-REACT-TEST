import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/materiales'

const CreateMateriales = () => {
    const [estado, setEstado] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [stock_minimo, setStock] = useState(0)
    const [categoria_id, setCategoria] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, 
         {estado: estado,
         descripcion: descripcion,
         nombre: nombre,
         stock_minimo: stock_minimo,
         categoria_id: categoria_id,})
        navigate('/')
    }
    
  return (
    <div>
        <h3>Crear Materiales</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Estado</label>
                <input 
                    value={estado}
                    onChange={ (e)=> setEstado(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Descripcion</label>
                <input 
                    value={descripcion}
                    onChange={ (e)=> setDescripcion(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock Minimo</label>
                <input 
                    value={stock_minimo}
                    onChange={ (e)=> setStock(e.target.value)}
                    type='decimal'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Categoria</label>
                <input 
                    value={categoria_id}
                    onChange={ (e)=> setCategoria(e.target.value)}
                    type='decimal'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateMateriales