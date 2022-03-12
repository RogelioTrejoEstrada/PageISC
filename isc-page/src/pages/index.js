import React, { useState } from "react"

import { Carousel, Col, Container, Fade, Row, Tab, Tabs } from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {Telephone, Envelope, Whatsapp} from 'react-bootstrap-icons'


export default function Home({ data }) {

  const generales = data.generalesISC.nodes
  const thumb = data.thumbNosotros.nodes

  //console.log(thumb)
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
      <Container className="p-5">
        <Row className="justify-content-md-center ">
          <Col md={5}>
            <div className="textoJustificado presentacion">
              <h4>Ingeniería en Sistemas Computacionales</h4>
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
          <Col md ={6} className="text-center">
            <StaticImage
              src="../images/cara.jpg"
              alt="ISC"
              width={500}
              height={500}
              //aspectRatio={16/9}
            />
          </Col>
        </Row>
      </Container>

      {/* Tabulador general*/}
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
              <Tab eventKey={index} title={gral.frontmatter.title} key={gral.id} >
                <Row>
                  <Col md={gral.frontmatter.thumb ? 6 : 12} xs={12} className="tab-content">
                    <div className="mb-2"><h4>{gral.frontmatter.stack}</h4></div>
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

      <Row className="general mt-3 mb-5">
        <Col className="text-center" xs={12} md={12}>
          <h4 className=''>Contacto</h4>
          <h5 className='texto-contacto'>Correo electrónico:</h5>
          <h5 className='texto-contacto'><span><Envelope /></span> isei@upa.edu.mx</h5>
          <h5 className='texto-contacto'>Teléfono de oficina:</h5>
          <h5 className='texto-contacto'><span><Telephone /></span> 449 442 14 00 ext 1426</h5>
          <h5 className='texto-contacto'>Whatsapp:</h5>
          <h5 className='texto-contacto'><span><Whatsapp /></span> 449 341 24 09</h5>
        </Col>
      </Row>
     

      <Container className="mb-5 mt-5" >
      {/* <div className="subTitulo mb-4">
          <h3 className="text-center">Nosotros</h3>
        </div> */}
        <Carousel className=" text-center" >
          {thumb.map((imagen) => (
            <Carousel.Item key={imagen.id}  className="carrusel">
              <GatsbyImage image={imagen.frontmatter.thumb.childImageSharp.gatsbyImageData}
                alt={imagen.frontmatter.stack}
              />
              <Carousel.Caption >
                <div dangerouslySetInnerHTML={{ __html: imagen.html }} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

    </Layout>
  )
}

export const query = graphql`
 query {
  bannerInicio: file(relativePath: {eq: "nosotros/upa_banner.JPG"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }

   thumbNosotros: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/(thumbNosotros)/"}}) {
    nodes {
      id
      html
      frontmatter {
        slug
        stack
        title
        
        thumb {
          childImageSharp {
            gatsbyImageData(
              height: 400
              width: 1000
              placeholder: BLURRED
              quality: 70
              blurredOptions: {width:50}
              transformOptions: {cropFocus: CENTER, fit: COVER}
            )
          }
        }
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

