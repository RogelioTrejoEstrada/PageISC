import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { TelephoneFill, EnvelopeFill, GeoAltFill, Facebook } from 'react-bootstrap-icons'
import { Link } from 'gatsby';

function Footer() {
  return (
    <div className="footer1">
      <Container>
        <Row className='mt-1 justify-content-center'>
          <Col md={4} className="ml-4">
            <h6 className='text-center footer-titulo'>Contacto</h6>
            <ul className="list-unstyled pl-1 footer-ul">
              <li><span><GeoAltFill /></span> Calle Paseo San Gerardo 207, San Gerardo C.P. 20342 Aguascalientes, Ags</li>
              <li><span><EnvelopeFill /></span> isei@upa.edu.mx </li>
              <li><span><TelephoneFill /></span> 449 442 14 00 ext 1426</li>
              {/* <li><span><Whatsapp /></span> 449 341 24 09</li> */}
            </ul>
          </Col>
          <Col md={3} className="ml-4">
            <h6 className='text-center footer-titulo'>Mapa del sitio</h6>
            <ul className="list-unstyled pl-5">
              <li><Link to='/'>Inicio</Link></li>
              {/* <li><Link to='/about'>Nosotros</Link></li> */}
              <li><Link to='/instalaciones'>Instalaciones</Link> </li>
              <li><Link to='/mapaCurricular'>Mapa Curricular</Link></li>
              <li><Link to='/contactanos'>Contáctanos</Link></li>
            </ul>
          </Col>
          <Col md={4} className="ml-4">
            <h6 className='text-center footer-titulo'>Sitios amigos</h6>
            <ul className="list-unstyled pl-1">
              <li><a href='https://www.facebook.com/ingenieria.isei' target='_blank' rel='noreferrer'><Facebook /> Ingeniería en Sistemas Computacionales</a> </li>
              <li><a href='https://www.facebook.com/UniversidadPolitecnicaAguascalientes' target='_blank' rel='noreferrer'><Facebook /> Universidad Politécnica de Aguascalientes</a></li>
              <li><a href='https://www.upa.edu.mx/' target='_blank' rel='noreferrer'>www.upa.edu.mx </a></li>
              <li><a href='https://sii.upa.edu.mx/index.php' target='_blank' rel='noreferrer'>Sistema Integral de Información UPA</a></li>
              <li><a href='http://mi-escuelamx.com:8888/upa/acceso.asp' target='_blank' rel='noreferrer'>Sistema de pagos</a></li>
            </ul>
          </Col>

        </Row>

        <Row >
          <Col className="text-center">
            <p className="copyright">ISC - Universidad Politécnica de Aguascalientes</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
