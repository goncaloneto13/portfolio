import './header.css'
import {AiFillHome,AiFillProject,AiOutlineComment,AiFillInfoCircle} from 'react-icons/ai'
export default function Header({ScrollProj,ScrollHome,ScrollCont,ScrollTrabalhos}){

    return(
    
        <div className='header'>
            <div>
                <h1 onClick={ScrollHome}> <AiFillHome></AiFillHome> Home</h1>
                <h1 onClick={ScrollProj} > <AiFillProject></AiFillProject> Projetos</h1>
                <h1 onClick={ScrollTrabalhos}> <AiFillInfoCircle></AiFillInfoCircle> Pesquisa</h1> 
                <h1 onClick={ScrollCont}> <AiOutlineComment></AiOutlineComment> Contato</h1>
            </div>
        </div>   
    
    )
}