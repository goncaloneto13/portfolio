
import { useState } from 'react'
import './projeto.css'

export default function Projeto({name,fig}){

    const [descOpen,setDescOpen] = useState(false)

    return(
     <>
        <div className='projeto' onClick={() => setDescOpen(true)}>
            <img src={fig}></img>
            <div className='name'>{name}</div>

        </div>

        <div className={`descricao ${ descOpen? 'descricao-open' : '' }`}>
            <button type='button' onClick={() => setDescOpen(false)}>close</button>
            <h1>{name}</h1>
            <img src={fig}></img>
        </div>
    </>
    )
}