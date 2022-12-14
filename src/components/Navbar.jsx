import React from 'react'
import { FaGithub } from 'react-icons/fa'
import '../Styles/Navbar.css'

function Navbar() {
    return (
        <>
            <header>
                <div className="logo">
                    <a href="/" style={{ fontSize: '32px', color: '#fff' }}>Poletto<span style={{ color: '#b10c43' }}>.</span></a>
                </div>
                <input type="checkbox" id='nav_check' hidden />
                <nav>
                    <div className="logo">
                        <a href="/" style={{ color:'#000', textDecoration: 'none', outline: 'none' }}>Poletto<span style={{ color: '#b10c43' }}>.</span></a>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/sobre">Sobre</a>
                        </li>
                        <li>
                            <a href="/projetos">Projetos</a>
                        </li>
                        <li>
                            <a href="/skills">Skills</a>
                        </li>
                        <li>
                            <a href="/contatos">Contatos</a>
                        </li>
                        <li id='github_icon'>
                            <a href="https://github.com/Polettinho" target='_blank'><FaGithub style={{ fontSize: '24px', display: 'flex', textAlign: 'center' }} /></a>
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