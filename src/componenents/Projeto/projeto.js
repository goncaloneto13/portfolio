
import { useState } from 'react'
import './projeto.css'

export default function Projeto({setProjeto,name,fig,image,info}){

    const [descOpen,setDescOpen] = useState(false)

    function showProjeto(){
        setDescOpen(true)
        setProjeto({name: name, fig:fig, image:image, info:info})

    }

    return(
     <>
        <div className='projeto' onClick={showProjeto}>
            <img src={fig}></img>
            <div className='name'>{name}</div>

        </div>
        
       
    </>
    )
}

//<div className={`descricao ${ descOpen? 'descricao-open' : '' }`}>
      
//<h1>{name}</h1>

//</div>