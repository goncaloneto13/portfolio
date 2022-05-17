import './projetos.css'
import Projeto from '../Projeto/projeto'
import fig2 from '../../assets/images/mountains.jpg'

import whats1 from '../../assets/images/Whats/whats (1).png'
import whats2 from '../../assets/images/Whats/whats (2).png'
import whats3 from '../../assets/images/Whats/whats (3).png'
import whats4 from '../../assets/images/Whats/whats (4).png'
import P1_c from '../../assets/images/Painel Cont. imagens/0001 - Copia.jpg'
import P1 from '../../assets/images/Painel Cont. imagens/0001.jpg'
import P2 from '../../assets/images/Painel Cont. imagens/0002.jpg'
import P3 from '../../assets/images/Painel Cont. imagens/0003.jpg'
import P4 from '../../assets/images/Painel Cont. imagens/0004.jpg'
import P5 from '../../assets/images/Painel Cont. imagens/0005.jpg'
import P6 from '../../assets/images/Painel Cont. imagens/0006.jpg'
import P7 from '../../assets/images/Painel Cont. imagens/0007.jpg'
import P8 from '../../assets/images/Painel Cont. imagens/0008.jpg'
import Z1 from '../../assets/images/ZSSN/1.PNG'
import Z2 from '../../assets/images/ZSSN/2.PNG'
import Z3 from '../../assets/images/ZSSN/3.PNG'
import Z4 from '../../assets/images/ZSSN/4.PNG'
import Z5 from '../../assets/images/ZSSN/5.PNG'
import Z6 from '../../assets/images/ZSSN/6.PNG'
import Z7 from '../../assets/images/ZSSN/7.PNG'
import Z8 from '../../assets/images/ZSSN/8.PNG'
import Z9 from '../../assets/images/ZSSN/9.PNG'
import avisos1 from '../../assets/images/Avisos/1.jpg'
import avisos2 from '../../assets/images/Avisos/2.jpg'


import ImageGallery from 'react-image-gallery';
import {AiFillProject} from 'react-icons/ai'
import {useState } from 'react'


export default function Projetos({ ref }) {

    const images = [
        {original: whats1,thumbnail: whats1},
        {original: whats2,thumbnail: whats2},
        {original: whats3,thumbnail: whats3},
        {original: whats4,thumbnail: whats4}
    ];

    const imagesP = [
        {original: P1, thumbnail: P1 },
        {original: P2, thumbnail: P2 },
        {original: P3, thumbnail: P3 },
        {original: P4, thumbnail: P4 },
        {original: P5, thumbnail: P5 },
        {original: P6, thumbnail: P6 },
        {original: P7, thumbnail: P7 },
        {original: P8, thumbnail: P8 },
    ];

    const imagesZSSN = [
        {original: Z1, thumbnail: Z1 },
        {original: Z2, thumbnail: Z2 },
        {original: Z3, thumbnail: Z3 },
        {original: Z4, thumbnail: Z4 },
        {original: Z5, thumbnail: Z5 },
        {original: Z6, thumbnail: Z6 },
        {original: Z7, thumbnail: Z7 },
        {original: Z8, thumbnail: Z8 },
        {original: Z9, thumbnail: Z9 },
    ];

    const imagesAvisos = [
        {original: avisos1, thumbnail: avisos1},
        {original: avisos2, thumbnail: avisos2}  
    ];

    const infoWhats = <>
                            <a href="https://reactjs.org" target="__blank">
                            <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&amp;link=https://reactjs.org"></img>
                            </a>
                            <h3>Interface do WhatsApp Web recriada utilizando React.<br/> 
                            <br/>
                            Foi desenvolvida as funcionalidades de Login por SMS utilizando Firebase Authentication e a troca de mensagens utilizando 
                            Cloud Firestore, podendo criar novas conversas, enviar mensagens, apagar conversas e mensagens antigas.
                                
                            "</h3>
                      </>

    const infoP = <h3>No Tribunal de Contas do Estado do Piauí foi realizado um levantamento no site Mural de  Contratos
            para averiguar como estava a situação de cadastro de contratos realizados no Site.<br/><br/>
            
            A Divisão que eu trabalho é responsável por fiscalizar as atuações na área de TI e para realizar esse levantamento
            foi necessário a divisão entre Contratos de TI e Contratos que não são de TI. <br/>
            
            Para realizar essa divisão eu desenvolvi um algoritmo utilizando <b>Processamento de Linguagem Natural</b> em <b>Python</b>, para a classificação 
            dos Objetos dos Contratos, e esse algoritmo retornou 97% de taxa de acurácia na classificação dos contratos<br/><br/>
            
            Depois, desenvolvi os Dashboard utilizando o <b>Microsoft Power BI</b> para auxiliar e cruzar dados utilizados pelos
            Auditores do Tribunal no desenvolvimento do levantamento.
            </h3>

    const infoAvisos = <h3>
     
        No Tribunal de Contas do Estado do Piauí, realizei um levantamento sobre os avisos do setor enviados para os municípios e unidades gestoras do estado do Piauí. <br>
        </br>
        <br></br>
        Cruzando informações do banco de dados de licitações e dados do banco <b>Access</b>, usando <b>PowerBI</b>, foi possível relacionar as licitações e municípios que mais tiveram avisos de irregularidades encontradas e se esses avisos foram respondidos pela prefeitura. <br></br>
        <br></br>
        Esse trabalho auxiliou os auditores a desbobrirem qual os municípios estão ignorando os avisos e tomar os devidos procedimentos
        para saber o que estava acontecendo e como poderia ser solucionado esse problema. 


    </h3>
    
    const infoZSSN = 
    <h3>
        <h2> ZSSN Rede Social de Sobrevivência Zumbi </h2>

        
        
        Sistema para compartilhar recursos entre humanos não infectados de um suposto apocalipse zumbi.

        <h3>Tecnologia utilizadas: </h3>


    <li>Python</li>
    <li>Frameworks Django</li>
    <li>Django Rest</li>
    <li>Javascript (Jquery)</li>
    <li>Banco de Dados Postgres</li>
    <li>Ferramenta de Controle de Versões Git.</li>
    
   
    </h3>  

    const projetos = [  { name: 'Painel de Contratos  (PowerBI)', fig: P1_c ,image: imagesP, info: infoP}, 
                        { name: 'Painel de Avisos (PowerBI)', fig: avisos1,  image:imagesAvisos, info: infoAvisos},
                        { name: 'WhatsApp Web (React)', fig: fig2 ,image: images, info:infoWhats},
                        { name: 'ZSSN (Django)', fig: Z1,  image:imagesZSSN, info: infoZSSN}
                    ]

    const [projeto, setProjeto] = useState(projetos[0])


    
    return (
        <div className='back-projetos'>
        <div ref={ref} className='projetos'>
           
            <h1> <AiFillProject ></AiFillProject> Projetos</h1>

            <div className='lista'>
                {projetos.map(projeto => <Projeto setProjeto={setProjeto} name={projeto.name} fig={projeto.fig} image={projeto.image} info={projeto.info}></Projeto>)}
            </div>

                <h2  >{projeto.name}</h2>
                <img scr = {images}></img>
                <ImageGallery items={projeto.image} autoPlay={false} ></ImageGallery>
               

                <h2><li>Informaçãoes</li></h2>

               

                <div className='info'>
                    {projeto.info}
                </div>
            

        </div >
        </div>
    )

}