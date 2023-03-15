import React,{useState,useEffect} from 'react'
import axios  from 'axios'

export default function ListaCarros(){
    const[carros, setCarros] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/carros')
        .then(res=>{
            const dadosCarros = res.data
        })
    })
}