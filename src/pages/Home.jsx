import React from 'react'
import '../Styles/Home.css'
import { FaJsSquare, FaReact, FaNodeJs, FaCode } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className='content'>
        <div className="info_home">
          <img className='perfil' src="" alt="" />
          <h1>Eduardo Poletto</h1>
          <h2><FaCode style={{ fontSize: '15px' }} /> Desenvolvedor Web <FaCode style={{ fontSize: '15px' }} /></h2>
          <div className="dev_informations">
            <a className='dev_icons' href='/javascript' >
              <FaJsSquare style={{ borderRadius: '5px', color: '#EFD81D' }} />
            </a>
            <a className='dev_icons' href='/react' >
              <FaReact style={{ color: '#5ED3F3' }} />
            </a>
            <a className='dev_icons' href='/node' >
              <FaNodeJs style={{ color: '#7CB73F' }} />
            </a>
          </div>

          <div className="buttons">
            <button className='btn_contacts'>Contatos</button>
            <button className='btn_projects'>Projetos</button>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home