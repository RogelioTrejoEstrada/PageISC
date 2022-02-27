import React from "react"

import { Col, Container, Row} from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
//import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function Programas({data}) {
  const programasInstitucionales = data.programas.nodes
  console.log(programasInstitucionales)
  return (
    <Layout>
      <Seo title = "Programas"/>
      <div className='programas'></div>
      <Cabecera
          titulo2="Programas"
          titulo1="Ingeniería en Sistemas Computacionales"
          imagen = {data.banner.childImageSharp.fluid}
        />
      <Container className = 'mb-5'>
        {programasInstitucionales.map((programa, index) => (
          <Row className="justify-content-md-center mb-5" key={programa.id}>
              <div className="textoJustificado">
                <h3 className="text-center"> {programa.frontmatter.title}</h3>
                <Row>
                  
                  <Col md={index % 2 === 0 ? {order: 1}: null}>
                    <div dangerouslySetInnerHTML={{ __html: programa.html }} />
                  </Col>
                  
                  {programa.frontmatter.thumb ? 
                    <Col>
                      <div className="image-contenedor">
                      <Img
                        fluid={programa.frontmatter.thumb.childImageSharp.fluid}
                        alt={programa.frontmatter.stack}
                        className="image-zoom"
                        style={{ height: "100%", width: "100%" }}
                      />
                      </div>
                    </Col> : null}

                </Row>
              </div>

           
          </Row>
        ))}
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
 