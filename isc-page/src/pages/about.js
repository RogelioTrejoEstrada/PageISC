import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

function About({data}) {
  return (
    <Layout>
      <div className='nosotros'></div>
      <Cabecera
          titulo2="Nosotros"
          titulo1="Ingeniería en Sistemas Computacionales"
          imagen = {data.file.childImageSharp.fluid}
        />
      <Container className = 'mb-5'>

        <Row className="justify-content-md-center">
          <Col md={6} className="m-auto">
            <StaticImage src="../images/inicio.jpg" alt="UPA Logo" />
          </Col>
          <Col md={6}>
            <div className="textoJustificado">
              <h3>Misión</h3>
              <p>
                Formar profesionistas capaces de resolver problemas mediante el
                pensamiento crítico, ético y novedoso, con un sistema integrado
                de innovación tecnológica y de investigación a través de la
                ingeniería de software y/o la gestión de redes de comunicación,
                capaces de interactuar en proyectos multidisciplinarios
                orientados a la adecuada toma de decisiones, ofreciendo
                soluciones para la mejora de la comunidad y su entorno.
              </p>
              <h3>Visión</h3>
              <p>
                La carrera de ISC es reconocida como una comunidad profesional y
                académica con altos estándares orientados a la vanguardia,
                comprometidos con la investigación, el desarrollo tecnológico y
                humano, en la búsqueda de la mejora de su entorno mediante una
                formación por competencias.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p>Como derivado el programa académico de Ingeniería en Sistemas Estratégicos de Información, el programa académico 
            de ISC cuenta con los siguientes reconocimientos:        </p>
          </Col>
        </Row>
        
      </Container>
    </Layout>
  )
}

export default About;

export const query = graphql`
query bannerAbout{
  file(relativePath: {eq: "inicio.jpg"}){
    childImageSharp {
      fluid(maxWidth: 1800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;