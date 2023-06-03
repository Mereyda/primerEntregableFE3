import './App.css'
import Card from './components/Card'
import Formulario from './components/Formulario'
import { useState } from 'react'

function App() {
  const [persona, setPersona] = useState({})

  const guardarPersona = (nombre, edad) => {
    setPersona({ nombre, edad })
  }
  return (
    <>
      <Formulario guardarPersona={guardarPersona} />
      {Object.keys(persona).length === 0 ? undefined : (
        <Card nombre={persona.nombre} edad={persona.edad} />
      )}
    </>
  )
}

export default App
