import React, { useState } from "react"

import { Col, Fade, Container, Row, Tab, Tabs } from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

//import Img from 'gatsby-image'

export default function Home({ data }) {

  const generales = data.generalesISC.nodes
  const [key, setKey] = useState('0');

  return (
    <Layout>
      <Seo title="ISC" />
      <div className='inicio'></div>
      <Cabecera
        titulo2="Universidad Politécnica de Aguascalientes"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.bannerInicio.childImageSharp.fluid}
      />
      <Container>
        <div className="subTitulo mb-4">
          <h3 className="text-center">Ingeniería en Sistemas Computacionales</h3>
        </div>
        <Row className="justify-content-md-center">
          <Col md={12}>
            <div className="textoJustificado">
              <p>
                El programa académico de Ingeniería en Sistemas Computacionales es la renovación y
                actualización del programa anterior: Ingeniería en Sistemas Estratégicos de Información, que
                tiene como objetivo diseñar, desarrollar e implementar sistemas
                informáticos en las organizaciones, aplicando las tecnologías
                de información y de las comunicaciones para asegurar la
                eficiencia en los procesos productivos.
              </p>

            </div>
          </Col>

        </Row>
      </Container>

      <Container className="mb-5 mt-5">

        <Col md={{ span: 10, offset: 1 }} >
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 titulo-tabs"
            transition={Fade}
          >
            {generales.map((gral, index) => (
              <Tab eventKey={index} title={gral.frontmatter.title} key={gral.id} className="">
                <Row>
                  <Col md={gral.frontmatter.thumb ? 6: 12} xs={12}>
                    <div dangerouslySetInnerHTML={{ __html: gral.html }} />
                  </Col>
                  {gral.frontmatter.thumb ?
                    <Col md={index % 2 === 0 ? { order: "first" } : null} >
                      <div className="image-contenedor">
                        <Img
                          fluid={gral.frontmatter.thumb.childImageSharp.fluid}
                          alt={gral.frontmatter.stack}
                          className={gral.frontmatter.tam === "logo" ? "image-escala" : "image-normal"}
                        />
                      </div>
                    </Col> : null}
                </Row>
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Container>
    </Layout>
  )
}

export const query = graphql`
 query {
  bannerInicio: file(relativePath: {eq: "upa_banner.JPG"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }

   generalesISC: allMarkdownRemark(sort: {
    order: ASC, fields: frontmatter___order}
    filter: {fileAbsolutePath: {regex: "/archivos/(general)/"}}) {
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

