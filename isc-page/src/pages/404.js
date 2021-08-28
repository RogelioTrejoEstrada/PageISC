import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


export default function NotFound({data}) {
    return (
      <Layout>
        <div className="instalaciones"></div>
        <Cabecera
          titulo2="Página no encontrada"
          titulo1="Ingeniería en Sistemas Computacionales"
          imagen={data.file.childImageSharp.fluid}
        />
        <Container className="mb-5">
          <Row className="justify-content-md-center">
            <Col md={6} className="m-auto">
              <StaticImage src="../images/inicio.jpg" alt="UPA Logo" />
            </Col>
            <Col md={6}>
              <div className="textoJustificado">
                <h3>Página no encontrada</h3>
                <p>
                  La página a la que ingresaste no existe, favor de visitar alguna que se encuentre en 
                  el menú superior.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export const query = graphql`
 query banner404{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;