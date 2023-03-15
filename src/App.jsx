import React,{useState,useEffect} from 'react'
import axios  from 'axios'
import './App.css'

function App() {
  const[carros, setCarros] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/carros')
        .then(res=>{
            const dadosCarros = res.data
            setCarros(dadosCarros)
            console.log(dadosCarros)
        })
    },[])

  return (
    <div className="App">
        <div className='carros'>
        <h1>LISTA DE CARROS</h1>
        <table>
          <tr>
            <th>IDD</th>
            <th>marca</th>
            <th>modelo</th>
            <th>dono</th>
          </tr>
        {carros.map(
        carro => 
          <tr key={carro.id}>
            <td>{carro.id}</td>
            <td>{carro.marca}</td>
            <td className='tdCar'>{carro.modelo}</td>
            <td>{carro.dono}</td>
          </tr>
          )}
        </table>
      </div>
    </div>
  )
}

export default App
