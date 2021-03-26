import './projetos.css'
import Projeto from '../Projeto/projeto'
import fig1 from '../../assets/images/grafCacd.png'
import fig2 from '../../assets/images/mountains.jpg'

import whats1 from '../../assets/images/whats (1).png'
import whats2 from '../../assets/images/whats (2).png'
import whats3 from '../../assets/images/whats (3).png'
import whats4 from '../../assets/images/whats (4).png'
import ImageGallery from 'react-image-gallery';
import {AiFillProject} from 'react-icons/ai'
import { useEffect, useState } from 'react'


export default function Projetos({ ref }) {

    const projetos = [{ name: 'Projeto 1', fig: fig1 }, { name: 'Cópia Whats', fig: fig2 }, { name: 'Whats', fig: fig2 }]
    const [projeto, setProjeto] = useState(projetos[1])



    const images = [
        {
            original: whats1,
            thumbnail: whats1,
        },
        {
            original: whats2,
            thumbnail: whats2,
        },
        {
            original: whats3,
            thumbnail: whats3,
        },
        {
            original: whats4,
            thumbnail:whats4,
        },
    ];

    
    return (
        <div className='back-projetos'>
        <div ref={ref} className='projetos'>
        
            <h1> <AiFillProject ></AiFillProject> Projetos</h1>

            <div className='lista'>
                {projetos.map(projeto => <Projeto setProjeto={setProjeto} name={projeto.name} fig={projeto.fig}> </Projeto>)}
            </div>

           
                <h2  >{projeto.name}</h2>
            
                <ImageGallery items={images} autoPlay={true} ></ImageGallery>

                <h2>Informaçãoes</h2>

                <a href="https://reactjs.org" target="__blank">
                <img src="https://img.shields.io/badge/Frontend-React-blue?style=flat-square&amp;link=https://reactjs.org"></img>
                </a>

                Esse projeto lala ...

        </div >
        </div>
    )

}