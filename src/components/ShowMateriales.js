import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'

const ShowMateriales = () => {
   const[materiales, setMateriales] = useState( [] )
   
   useEffect ( ()=> {
      getAllMateriales()
  }, [])

   const getAllMateriales = async () => {
      const response = await axios.get(`${endpoint}/materiales`)
      setMateriales(response.data)
      //console.log(response.data)
   }

   const deleteMateriales = async (id) => {
      await axios.delete(`${endpoint}/materiales/${id}`)
      getAllMateriales()
   }

   return (
      <div>
      <div className='d-grid gap-2'>
          <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>CREAR</Link>
      </div>

      <table className='table table-striped'>
          <thead className='bg-primary text-white'>
              <tr>
                  <th>Estado</th>
                  <th>Nombre</th>
                  <th>Stock</th>
                  <th>Categoria</th>
                  <th>Creado el</th>
                  <th>Modificado el</th>
                  <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              { materiales.map( (material) => (
                  <tr key={material.id}>
                      <td> {material.estado} </td>    
                      <td> {material.nombre} </td>    
                      <td> {material.stock_minimo}</td>
                      <td> {material.categoria_id}</td>
                      <td> {material.created_at}</td>
                      <td> {material.updated_at}</td>
                      <td>
                          <Link to={`/edit/${material.id}`} className='btn btn-warning'>Edit</Link>
                          <button onClick={ ()=>deleteMateriales(material.id) } className='btn btn-danger'>Delete</button>
                      </td>

                  </tr>
              )) }
          </tbody>
      </table>
  </div>
   )
}

export default ShowMateriales