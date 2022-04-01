import './contato.css'
import {AiOutlineWhatsApp, AiOutlineComment,AiOutlineMail,AiFillLinkedin} from 'react-icons/ai'

export default function Contato(){

    return(
        <div className='contato'>
            <div className='contato-box'>
                <h1><AiOutlineComment ></AiOutlineComment>  Contato </h1>

                <h2><AiOutlineMail ></AiOutlineMail> E-mail: <a href="mailto:g.neto137@gmail.com?subject=Olá%20Gonçalo,%20encontrei%20seu%20email%20pelo%20portifólio">g.neto137@gmail.com</a></h2>
                <h2><AiOutlineWhatsApp color={'green'}></AiOutlineWhatsApp> Telefone: <a target="_blank" href=' https://api.whatsapp.com/send?phone=5586988547825&text=Olá%20Gonçalo,%20encontrei%20seu%20número%20pelo%20portifólio'>(86) 98854-7825</a>  </h2>
                <h2><AiFillLinkedin/> Linkedin: <a className ='linkedin' href="https://www.linkedin.com/in/gonçalo-a-955b49112/">https://www.linkedin.com/in/gonçalo-a-955b49112/</a></h2>

            </div>

            <h4>2022, by Gonçalo Amarante</h4>
        </div>
    )
}