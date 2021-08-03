import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import {footer, copyright} from '../styles/Footer.module.css'
import {TelephoneFill, EnvelopeFill, GeoAltFill, Whatsapp, Facebook } from 'react-bootstrap-icons'
import { Link } from 'gatsby';

function Footer() {
    return (
      <div className={footer}>
        <Container>
          <Row className='mt-1 justify-content-center'>
            <Col className="col-md-3 col-sm-6 ml-5">
              <h6 className='text-center'>Contacto</h6>
              <ul className="list-unstyled pl-1">
                <li><span><GeoAltFill /></span> Calle Paseo San Gerardo 207, San Gerardo</li>
                <li> C.P. 20342 Aguascalientes, Ags</li>
                <li><span><EnvelopeFill /></span> isei@upa.edu.mx </li>
                <li><span><TelephoneFill /></span> 449 442 14 00 ext 1426</li>
                <li><span><Whatsapp /></span> 449 341 24 09</li>
              </ul>
            </Col>
            <Col className="col-md-2 col-sm-6 ml-5">
              <h6 className='text-center'>Mapa del sitio</h6>
              <ul className="list-unstyled pl-1">
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/about'>Nosotros</Link></li>
                <li><Link to='/instalaciones'>Instalaciones</Link> </li>
                <li><Link to='/mapaCurricular'>Mapa Curricular</Link></li>
                <li><Link to='/contactanos'>Contáctanos</Link></li>
              </ul>
            </Col>
            <Col className="col-md-2 col-sm-6 ml-5">
              <h6 className='text-center'>Redes</h6>
              <ul className="list-unstyled pl-1">
                <li><a href='https://www.facebook.com/ingenieria.isei' target='_blank' rel='noreferrer'><Facebook /> ISEI</a> </li>
                <li><a href='https://www.facebook.com/UniversidadPolitecnicaAguascalientes' target='_blank' rel='noreferrer'><Facebook /> UPA</a></li>
                <li><a href='https://www.upa.edu.mx/' target='_blank' rel='noreferrer'>www.upa.edu.mx </a></li>
              </ul>
            </Col>
            
          </Row>
          
          <Row > 
          <Col className="text-center">
          <p className={copyright}>ISC - Universidad Politécnica de Aguascalientes</p>
          </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Footer;
