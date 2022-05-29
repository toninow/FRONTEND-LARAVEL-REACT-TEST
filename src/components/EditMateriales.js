import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/materiales/'

const EditMateriales = () => {
    const [estado, setEstado] = useState('')
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [stock_minimo, setStock] = useState(0)
    const [categoria_id, setCategoria] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            estado: estado,
            descripcion: descripcion,
            nombre: nombre,
            stock_minimo: stock_minimo,
            categoria_id: categoria_id,
        })
        navigate('/')
    }
    
    useEffect( () =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setEstado(response.data.estado)
            setDescripcion(response.data.descripcion)
            setNombre(response.data.nombre)
            setStock(response.data.stock_minimo)
            setCategoria(response.data.categoria_id)
        }
        getProductById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <h3>Editar Material</h3>
        <form onSubmit={update}>
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
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
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
                <label className='form-label'>Stock</label>
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
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Actualizar</button>
        </form>
    </div>
    )
}

export default EditMateriales

