import {baseColaboradores} from './assets/BaseColaboradores'
import './App.css'
import { useState } from 'react'

function App() {
  
  const [personas,setPersonas] = useState(baseColaboradores)
  const [inputNombre,setInputNombre] = useState('')
  const [inputCorreo,setInputCorreo] = useState('')
  const [inputEdad,setInputEdad] = useState('')
  const [inputCargo,setInputCargo] = useState('')
  const [inputTelefono,setInputTelefono] = useState('')
  const [alert,setAlert] = useState('')
  const [buscar,setBuscar] = useState('')
  

  function limpiar(){
    setInputNombre('')
    setInputCorreo('')
    setInputEdad('')
    setInputCargo('')
    setInputTelefono('')
    setBuscar('')
  }

  function guardar(e){
    e.preventDefault()
    const ultimoId = personas[personas.length-1].id
    const nuevoUsuario = {id: ultimoId+1,nombre:inputNombre,correo:inputCorreo,edad:inputEdad,cargo:inputCargo,telefono:inputTelefono}
    setPersonas([...personas,nuevoUsuario])
    if(inputNombre == '' || inputCorreo == '' || inputEdad == '' || inputCargo == '' || inputTelefono == ''){
      setAlert('Se deben llenar todos los campos')
      limpiar()
      return  
    }else{
      setAlert('Datos Correctos')
    }
    limpiar()
  }
  function buscando(e){
    e.preventDefault()
    const nombreBuscado=baseColaboradores.filter((colaborador)=>colaborador.nombre == e.target.value)
    if(nombreBuscado == e.target.value){
      setAlert('Se ha encontrado un Nombre')
      limpiar()
      return
    }else{
      setAlert('No hay Coincidencias')
    }
  }

  return (
    <>
      <h1>Desafio 3</h1>
      <form onSubmit={buscando}>
        <input type="text" placeholder='Ingrese Nombre' value={buscar} onChange={(e)=>setBuscar(e.target.value)} />
        <button type='submit'>Buscar</button>
      </form>
        <h2>{alert}</h2>

      <form onSubmit = {guardar}>
        <input type="text" placeholder='Ingrese su nombre' value={inputNombre} onChange={(e)=>setInputNombre(e.target.value)}/>
        <input type="text" placeholder='Ingrese su correo' value={inputCorreo} onChange={(e)=>setInputCorreo(e.target.value)}/>
        <input type="text" placeholder='Ingrese su edad' value={inputEdad} onChange={(e)=>setInputEdad(e.target.value)}/>
        <input type="text" placeholder='Ingrese su cargo' value={inputCargo} onChange={(e)=>setInputCargo(e.target.value)}/>
        <input type="text" placeholder='Ingrese su telefono' value={inputTelefono} onChange={(e)=>setInputTelefono(e.target.value)}/>
        <button type='submit'>Agregar</button>
        {/* <div style={{display:'flex',gap:'15px'}}>
          <p>{inputNombre}</p>
          <p>{inputCorreo}</p> 
          <p>{inputEdad}</p> 
          <p>{inputCargo}</p>
          <p>{inputTelefono}</p>
        </div> */}
      </form>
        <h2>{alert}</h2>
      <section>
         { personas.map((el) => 
            <article>
                <h3>Id: {el.id}</h3>
                <h3>Nombre: {el.nombre}</h3>
                <h3>Correo: {el.correo}</h3>
                <h3>Edad: {el.edad}</h3>
                <h3>Cargo: {el.cargo}</h3>
                <h3>Telefono: {el.telefono}</h3>
            </article>
          )}
      </section>
    </>
  )
}

export default App
