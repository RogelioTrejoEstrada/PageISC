import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'



export default function Instalaciones({data}) {
  const tarjetasLabs = data.thumbLabs.nodes
  const tarjetasCampus = data.thumbCampus.nodes

  return (
    <Layout>
      <div className="instalaciones"></div>
      <Cabecera
        titulo2="Instalaciones"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.banner.childImageSharp.fluid}
      />
      <Container className="justify-content-center text-center">
        <div className="subTitulo">
          <h3>Laboratorios</h3>
        </div>
        <Row>
          {tarjetasLabs.map(tarjeta => (
            <Col
              md={4}
              sm={12}
              className="mb-3 mt-4"
              key={tarjeta.frontmatter.stack}
            >          
              <h5>{tarjeta.frontmatter.title}</h5>
              <div className="cardImagen">
                <Img
                  fluid={tarjeta.frontmatter.thumb.childImageSharp.fluid}
                  alt={tarjeta.frontmatter.stack}
                  
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </Col>
          ))}

          {/* <Col>
            <h5>{tarjetas[0].title}</h5>
            <div className="cardImagen">
              <Carousel>
                <CarouselItem>
                  <StaticImage
                    src="../images/infraestructura/redes.PNG"
                    alt={tarjetas[0].title}
                  />
                  <Carousel.Caption>
                    <h4>{tarjetas[0].caption}</h4>
                  </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                  <StaticImage
                    src="../images/bienvenidos.JPG"
                    alt={tarjetas[0].title}
                  />
                </CarouselItem>
              </Carousel>
            </div>
          </Col> */}
        </Row>
      </Container>
      <Container className="justify-content-center text-center mt-4 mb-5">
        <div className="subTitulo">
          <h3>Campus Universitario</h3>
        </div>
        <Row>
          {tarjetasCampus.map(tarjeta => (
            <Col
              md={4}
              sm={12}
              className="mb-3 mt-4"
              key={tarjeta.frontmatter.stack}
            >
              <h5>{tarjeta.frontmatter.title}</h5>
              <div className="cardImagen">
                <Img
                  fluid={tarjeta.frontmatter.thumb.childImageSharp.fluid}
                  alt={tarjeta.frontmatter.stack}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}




export const query = graphql`
 query {
  banner: file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
   thumbLabs: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/(thumbLabs)/"}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  thumbCampus: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/(thumbCampus)/"}}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
 }
`