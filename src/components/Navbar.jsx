import React from 'react'
import logo from '../assets/logo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} alt="" className='w-12 h-12 mx-2 bg-white rounded-3xl'/>
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/jerry-vincent-2495a3211/" target='_blank' rel='no-opener no-referrer' aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>
            <a href="https://github.com/JerryVincent" target='_blank' rel='no-opener no-referrer' aria-label='Github'>
                <FaGithub/>
            </a>
            <a href="https://www.instagram.com/dream_explorer545/" target='_blank' rel='no-opener no-referrer' aria-label='Instagram'>
                <FaInstagram/>
            </a>
        </div>
        
    </nav>
  )
}

export default Navbar