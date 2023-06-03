
import { useState } from 'react'
import styles from './Form.module.css'

function Formulario(props) {
  const [nombre, setNombre] = useState('')
  const [edad, setEdad] = useState(0)
  const [error, setError] = useState('')

  const onChangeNombre = e => {
    setNombre(e.target.value)
  }

  const onChangeEdad = e => {
    setEdad(e.target.value)
  }


  const handleSubmit = e => {
    e.preventDefault()

    if (!/^\S/.test(nombre)) {
      setError('hay un espacio vacio adelante')
    } else if (nombre.length <= 2) {
      setError('El nombre debe tener al menos 3 caracteres')
    } else if (edad <= 15) {
      setError('La persona tiene que ser mayor de edad')
    } else {
      setError('')
      props.guardarPersona(nombre, edad)
    }
  }

  return (
  
    <section>
    <form onSubmit={handleSubmit} className='card'>
      <ul>
      <label htmlFor='nombre-apellido'>Nombre</label>
      <input
        type='text'
        id='nombre-apellido'
        value={nombre}
        onChange={onChangeNombre}
      />
      </ul>
      <ul>

      <label htmlFor='edad'>Edad</label>
      <input
        type='number'
        id='edad'
        value={edad}
        onChange={onChangeEdad}
      />
      </ul>
      <button>Enviar</button>
      {error && <p>{error}</p>}
    </form>
    </section>
  )
}


export default Formulario