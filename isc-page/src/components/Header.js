
import { Link } from 'gatsby'
import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import {navbarBrand, navbarLink, navbarColor} from '../styles/Header.module.css'


export default function Header() {
  return (
    <Navbar className={navbarColor} expand="lg" variant='dark'>
      <Navbar.Brand className={navbarBrand} style={{color: '#fff'}} >ISC</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='ml-auto'>
            <Link to='/'className={navbarLink}>Inicio</Link>
            <Link to='/about'className={navbarLink}>Nosotros</Link>
            <Link to='/instalaciones'className={navbarLink}>Instalaciones</Link>
            <Link to='/mapa-curricular'className={navbarLink}>Mapa Curricular</Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
