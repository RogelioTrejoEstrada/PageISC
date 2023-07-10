import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { Telephone, Envelope } from 'react-bootstrap-icons'
import Seo from '../components/Seo'
import { useOnline } from '../hooks/useOnline'

// CSS
import '../styles/Map.css'

export default function Contacto({ data }) {
  const isOnline = useOnline()

  return (
    <Layout>
      <Seo title="Contacto" />
      <div className="contacto"></div>
      <Cabecera
        titulo2="Contáctanos"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.file.childImageSharp.fluid}
      />

      <Container>
        <div className="subTitulo mb-4">
          <h3 className="text-center">Ingeniería en Sistemas Computacionales</h3>
        </div>
        <Row className="mb-5">
          <Col className="p-3 m-3  text-center mapaCurricular-tarjeta" xs={11} md={6}>
            <h4 className=' mapaCurricular-header'>Contacto</h4>
            <br />
            <h5 className='texto-contacto'>Correo electrónico:</h5>
            <h5 className='texto-contacto'><span><Envelope /></span> isei@upa.edu.mx</h5>
            <br />
            <h5 className='texto-contacto'>Teléfono de oficina:</h5>
            <h5 className='texto-contacto'><span><Telephone /></span> 449 442 14 00 ext 1426</h5>
            <br />
            {/* <h5 className='texto-contacto'>Whatsapp:</h5>
            <h5 className='texto-contacto'><span><Whatsapp /></span> 449 341 24 09</h5> */}
          </Col>
          <Col className='p-3 m-3 text-center mapaCurricular-tarjeta'>
            <h4 className='mapaCurricular-header'>Ubicación</h4>
            {
              !isOnline
                ? <iframe
                  title='ubicacion'
                  width="100%"
                  height="400"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Universidad%20Polit%C3%A9cnica%20de%20Aguascalientes+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                ></iframe>
                : <div className="map">
                  <div>Ubicaciòn de la Universidad Politécnica</div>
                </div>
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
 query bannerContacto{
   file(relativePath: {eq: "nosotros/bienvenidos.JPG"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;
