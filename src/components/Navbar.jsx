import React from 'react'
import { FaGithub } from 'react-icons/fa'
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <>
        <header>
            <div className="logo">
                <h1>Poletto.</h1>
            </div>
            <input type="checkbox" id='nav_check' hidden/>
            <nav>
                <div className="logo">
                    <h1>Poletto.</h1>
                </div>
                <ul>
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Sobre</a>
                    </li>
                    <li>
                        <a href="/#">Projetos</a>
                    </li>
                    <li>
                        <a href="/#">Skills</a>
                    </li>
                    <li>
                        <a href="/#">Contatos</a>
                    </li>
                    <li id='github_icon'>
                        <a href="https://github.com/Polettinho" target='_blank'><FaGithub style={{fontSize: '24px', display: 'flex', textAlign: 'center'}}/></a>
                    </li>
                </ul>
            </nav>
            <label htmlFor="nav_check" className='hamburguer'>
                <div></div>
                <div></div>
                <div></div>
            </label>
        </header>
    </>
  )
}

export default Navbar