import React from 'react'
import { Col, Container, Row} from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Seo from '../components/Seo'



export default function Instalaciones({data}) {
  const tarjetasLabs = data.thumbLabs.nodes
  const tarjetasCampus = data.thumbCampus.nodes

  console.log(data)

  return (
    <Layout>
      <Seo title = "Instalaciones"/>
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
                  className="image-zoom"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            </Col>
          ))} 
        </Row>
        
         {/* <div className="image-container">
          <div className="image-grid">
            {tarjetasLabs.map(tarjeta => (
              <Img
                fluid={tarjeta.frontmatter.thumb.childImageSharp.fluid}
                alt={tarjeta.frontmatter.stack}
                className="image-item"
              />
            ))}
          </div>
        </div>  */}
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
                  className="image-zoom"
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