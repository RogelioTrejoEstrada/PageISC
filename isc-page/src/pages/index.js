import React, { useState, useEffect } from "react"

import { Card, Carousel, Col, Container, Fade, Row, Tab, Tabs } from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
 import LinkedInBadge from "../components/linkedinBadge";
 import {Grid} from '@material-ui/core'

export default function Home({ data }) {

  const generales = data.generalesISC.nodes
  const thumb = data.thumbNosotros.nodes
  const programas = data.programas.nodes

  //console.log(thumb)
  const [key, setKey] = useState('0');
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);



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
              <h4>Nosotros</h4>
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
          <Col md={6} className="text-center">
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
     
      <Row className="general m-auto text-center">
         <Container className="mb-3 mt-3 text-center m-auto" autoplay = {true} interval={6000}> 
          <h4 className="mb-2">Egresados</h4>   
          {/* <Grid xs={12} sm={6} md={3} style={{ display: "table" }}  className="m-auto" spacing={2}> */}
          {/* <Grid container xs={12} md={12} className="m-auto" spacing={2} alignItems='center' justifyContent="center">
            <LinkedInBadge user="crismatters" theme="light"/>
            <LinkedInBadge user="zaira-edith-macias-marin-a70a98203" theme="light"/>
            <LinkedInBadge user="leonardo-daniel-arévalo-pérez-2235321b1" theme="light"/>
            <LinkedInBadge user="esteban-uscanga-olea-862aba64" theme="light"/>
            <LinkedInBadge user="francisco-javier-salas-martinez-ab2078152" theme="light"/>
             {/* <LinkedInBadge user="paola-sánchez-gándara-5709411b9" theme="light"/> 
             <LinkedInBadge user="mauricioalcala" theme="light"/> 
            <LinkedInBadge user="jimena-velázquez-gómez-3703a7164" theme="light"/>
          </Grid> */}
          <Carousel className=" text-center" >
            <Carousel.Item className="carusel">
              <Grid container xs={12} md={12} className="m-auto" spacing={1} alignItems='center' justifyContent="center">
                <LinkedInBadge user="crismatters" theme="light" />
                <LinkedInBadge user="zaira-edith-macias-marin-a70a98203" theme="light" />
                <LinkedInBadge user="leonardo-daniel-arévalo-pérez-2235321b1" theme="light" />
                <LinkedInBadge user="esteban-uscanga-olea-862aba64" theme="light" />
              </Grid>
            </Carousel.Item>
            <Carousel.Item className="carusel">
              <Grid container xs={12} md={12} className="m-auto" spacing={1} alignItems='center' justifyContent="center">
                <LinkedInBadge user="francisco-javier-salas-martinez-ab2078152" theme="light" />
                <LinkedInBadge user="paola-sánchez-gándara-5709411b9" theme="light" />
                <LinkedInBadge user="mauricioalcala" theme="light" />
              </Grid>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Row>


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

      <Row className="general mt-5 mb-5 m-auto">
        <Container className="mt-3 mb-3  text-center">
          <Row className="text-center" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h4 className="mb-3">Programas específicos</h4>
            {programas.map((programa) => (
              <Col className="text-center" xs={6} md={2} key={programa.id}>
                <Card style={{ height: '100%', marginBottom: "1rem" }} >
                  <Link to="/programasInstitucionales">
                    <div className="image-contenedor">
                      <Img
                        fluid={programa.frontmatter.thumb.childImageSharp.fluid}
                        alt={programa.frontmatter.stack}
                        className={programa.frontmatter.tam === "logo" ? "image-escala image-zoom" : "image-normal image-zoom"}
                      />
                    </div>
                  </Link>
                  {/* <Card.Body>
                    <Card.Title >{programa.frontmatter.title}</Card.Title>

                  </Card.Body> */}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Row>

      <Container className="mb-5 mt-5" >
        <div className="subTitulo mb-4">
          <h3 className="text-center">Nuestras instalaciones</h3>
        </div>
        <Carousel className=" text-center" >
          {thumb.map((imagen) => (
            <Carousel.Item key={imagen.id} className="carusel">
              <GatsbyImage image={imagen.frontmatter.thumb.childImageSharp.gatsbyImageData}
                alt={imagen.frontmatter.stack}
              />
              {/* <Carousel.Caption >
                <div dangerouslySetInnerHTML={{ __html: imagen.html }} />
              </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>


     
     
      {/* <Container className="mb-5 mt5 text-center ">
        <div className="subTitulo mb-4">
          <h3 className="text-center">Video Promocional</h3>
        </div>
        <iframe
          title="Video upa"
          className="video"
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FUniversidadPolitecnicaAguascalientes%2Fvideos%2F483975670068669%2F&width=500&show_text=false&height=282&appId"
          allow="fullscreen">
        </iframe>

      </Container> */}


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

  programas: allMarkdownRemark(sort: {
    order: DESC, fields: frontmatter___date}
    filter: {fileAbsolutePath: {regex: "/archivos/(programas)/"}}) {
    nodes {
      html
      id
      frontmatter {
        stack
        title
        tam
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

