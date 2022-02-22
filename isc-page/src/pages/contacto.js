import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import {Telephone, Envelope, Whatsapp} from 'react-bootstrap-icons'
import Seo from '../components/Seo'

export default function Contacto({data}) {
    return (
      <Layout>
        <Seo title = "Contacto"/>
        <div className="contacto"></div>
        <Cabecera
          titulo2="Contáctanos"
          titulo1="Ingeniería en Sistemas Computacionales"
          imagen={data.file.childImageSharp.fluid}
        />
        <Container></Container>
        <Container>
          <Row className="mb-5">
            <Col className="p-3 m-3 mapaCurricular-tarjeta"  md={6}>
              <h4 className=' mapaCurricular-header'>Contacto</h4>
              <br/>
              <h5 className= 'texto-contacto'>Correo electrónico:</h5>
              <h5 className= 'texto-contacto'><span><Envelope /></span> isc@upa.edu.mx</h5>
              <br/>
              <h5 className= 'texto-contacto'>Teléfono de oficina:</h5>
              <h5 className= 'texto-contacto'><span><Telephone /></span> 449 442 14 00 ext 1426</h5>
              <br/>
              <h5 className= 'texto-contacto'>Whatsapp:</h5>
              <h5 className= 'texto-contacto'><span><Whatsapp /></span> 449 341 24 09</h5>
              <a href='https://wa.me/524492300927' target='_blank'> Yo</a>
              <a href='https://wa.me/524493412409' target='_blank'> Yo2</a>
            </Col>
            
            <Col className='p-3 m-3 text-center mapaCurricular-tarjeta'>
              <h4 className= 'mapaCurricular-header'>Ubicación</h4>
              <iframe
                title= 'ubicacion'
                width="100%"
                height="400"
                src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=Universidad%20Polit%C3%A9cnica%20de%20Aguascalientes+(Mi%20nombre%20de%20egocios)&ie=UTF8&t=&z=17&iwloc=B&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export const query = graphql`
 query bannerContacto{
   file(relativePath: {eq: "bienvenidos.JPG"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;