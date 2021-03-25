import './header.css'

export default function Header({ScrollProj,ScrollHome,ScrollCont,ScrollSobre}){

    return(
    
        <div className='header'>
            <div>
                <h1 onClick={ScrollHome}>Home</h1>
                <h1 onClick={ScrollProj} >Projetos</h1>
                <h1 onClick={ScrollSobre}>Sobre mim</h1>
                <h1 onClick={ScrollCont}>Contato</h1>
            </div>
        </div>   
    
    )
}