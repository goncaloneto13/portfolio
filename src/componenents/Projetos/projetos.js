import './projetos.css'
import Projeto from '../Projeto/projeto'
import fig1 from '../../assets/images/grafCacd.png'
import fig2 from '../../assets/images/mountains.jpg'

export default function Projetos({ref}){

    const projetos = [{name: 'Projeto 1', fig: fig1} , {name: 'Cópia Whats', fig: fig2}]

    return(
        <div ref={ref} className='projetos'>

            <div>
                {projetos.map(projeto => <Projeto name={projeto.name} fig={projeto.fig}> </Projeto>)}
            </div>
                
        </div >
    )

}