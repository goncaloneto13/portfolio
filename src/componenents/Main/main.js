import './main.css'
import foto from '../../assets/images/IMG-0271.jpg'
import {AiFillGithub,AiFillLinkedin ,AiOutlineMail} from 'react-icons/ai'
import {GrTopCorner ,GrBottomCorner} from 'react-icons/gr'

export default function Main({ScrollCont}) {

    return (
        <div className='main'>
          
            <img src={foto} ></img>
            <div>
            <GrTopCorner size={40} ></GrTopCorner>
                <h2>Gonçalo Amarante Ferreira Neto </h2>
               
                <span>
                    <a target="_blank" href="https://github.com/goncaloneto13" ><AiFillGithub  color={'purple'}size={30}></AiFillGithub></a>
                    <a target="_blank" href="https://www.linkedin.com/in/gon%C3%A7alo-a-955b49112/" ><AiFillLinkedin  color={'purple'} size={30}></AiFillLinkedin></a>
                    <AiOutlineMail size={30} color={'purple'} onClick={ScrollCont}></AiOutlineMail>
                </span>
               
                <h3>
                Graduado em Ciência da Computação pela Universidade Federal do Piauí, com experiências em programação com Python, React, SQL, Django, Django REST Framework e experiência com as ferramentas PowerBI, Microsoft Access, Microsoft Office, Excel e já trabalhei com manutenção de redes e computadores. <br></br> 
                Já realizei pesquisas com Machine Learning, para reconhecimento facial e classificação de textos, utilizando Python e a biblioteca Sklearn. Também tenho experiências de estágio no Tribunal de Contas do Estado, no Ministério Público do Trabalho, no Sebrae e dentro da universidade.  <br></br> 
                Apaixonado por novos conhecimentos e ambientes desafiadores.
                </h3>
               

                <GrBottomCorner className='bottonCorner' size={40}></GrBottomCorner>
            </div>


        </div>
    )
}