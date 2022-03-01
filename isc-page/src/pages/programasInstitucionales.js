import React from "react"

import { Accordion, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
//import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function Programas({ data }) {
  const programasInstitucionales = data.programas.nodes
  console.log(programasInstitucionales)
  return (
    <Layout>
      <Seo title="Programas" />
      <div className='programas'></div>
      <Cabecera
        titulo2="Programas"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.banner.childImageSharp.fluid}
      />
      <Container className='mb-5'>

        <Accordion>
          {programasInstitucionales.map((programa, index) => (


            <Accordion.Item eventKey={index}>
              <Row className="justify-content-md-center" key={programa.id}>

                <Accordion.Header>
                  <h5 className="text-center"> {programa.frontmatter.title}</h5>
                </Accordion.Header>
                <Accordion.Body>

                  <Row className="textoJustificado">

                    <Col  md={6} xs={12} >
                      <div dangerouslySetInnerHTML={{ __html: programa.html }} />
                    </Col>

                    {programa.frontmatter.thumb ?
                      <Col md={index % 2 === 0 ? {order: "first" } : null} >
                        <div className="image-contenedor">
                          <Img
                            fluid={programa.frontmatter.thumb.childImageSharp.fluid}
                            alt={programa.frontmatter.stack}
                            className="image-escala image-zoom"
                          //style={{ height: "100%", width: "100%" }}
                          />
                        </div>
                      </Col> : null}
                  </Row>
                </Accordion.Body>

              </Row>


            </Accordion.Item>

          ))}
        </Accordion>

       
      </Container>
    </Layout>
  )
}

export default Programas;

export const query = graphql`
 query {
  banner: file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
   programas: allMarkdownRemark(sort: {
    order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/(programas)/"}}) {
    nodes {
      html
      id
      frontmatter {
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

     
 }
`;
