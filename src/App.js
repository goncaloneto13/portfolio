
import './App.css';
import './global.css'
import Header from './componenents/Header/header'
import Main from './componenents/Main/main'
import Projetos from './componenents/Projetos/projetos'
import Contato from './componenents/Contato/contato'
import Trabalhos from './componenents/Trabalhos/trabalhos';

import React, { useRef } from 'react'

function App() {

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const refProjetos = useRef(null)
  const refCont = useRef(null)
  const refHome = useRef(null)
  const refTrabalhos = useRef(null)
  const ScrollProj = () => scrollToRef(refProjetos)
  const ScrollCont = () => scrollToRef(refCont)
  const ScrollHome = () => scrollToRef(refHome)
  const ScrollTrabalhos = () => scrollToRef(refTrabalhos)


  document.title = 'Olá sou o Gonçalo'
  return (
    
    <div className="App">

      <Header ScrollProj={ScrollProj} ScrollCont={ScrollCont} ScrollHome={ScrollHome} ScrollTrabalhos={ScrollTrabalhos} ></Header>

      <div className='page' ref={refHome}>
        <Main ScrollCont={ScrollCont} ></Main>
      </div>

      <div className='page' ref={refProjetos}>
        <Projetos />
      </div>

      <div className='page' ref={refTrabalhos}>
        <Trabalhos></Trabalhos>
      </div>

      <div className='page' ref={refCont}>
        <Contato></Contato>
      </div>
  
    </div>
  );
}

export default App;
