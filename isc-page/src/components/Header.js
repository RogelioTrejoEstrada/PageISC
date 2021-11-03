
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import {navbarBrand, navbarLink, navbarColor} from '../styles/Header.module.css'




export default function Header({pagina}) {
  const [active, setActive] = useState(pagina);
  
  return (
    <Container>
      
      <Navbar className={navbarColor} expand="lg">
        <Navbar.Brand className={navbarBrand} style={{ color: "#fff" }}>
          <StaticImage src="../images/UPA_Logo.png" width={100} alt="UPA"
          placeholder="tracedSVG" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mx-auto"
            activeKey={active}
            onSelect={selectedKey => setActive(selectedKey)}
          >
            <Nav.Link as={Link} to={"/"} className={navbarLink} eventKey="inicio">
              Inicio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/about"}
              className={navbarLink}
              eventKey="nosotros"
            >
              Nosotros
            </Nav.Link>

            <Nav.Link
              as={Link}
              to={"/instalaciones"}
              className={navbarLink}
              eventKey="instalaciones"
            >
              Instalaciones
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/mapaCurricular"}
              className={navbarLink}
              eventKey="mapaCurricular"
            >
              Mapa Curricular
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={"/contacto"}
              className={navbarLink}
              eventKey="contacto"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

