import React from "react"

import { Accordion, Col, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'

//import Img from 'gatsby-image'

export default function Home({ data }) {

  return (
    <Layout>
      <Seo title="ISC" />
      <div className='inicio'></div>
      <Cabecera
        titulo2="Universidad Politécnica de Aguascalientes"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.file.childImageSharp.fluid}
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

      <Container className="mt-3 mb-3">
        <Row className="justify-content-md-center">
          <Col md={6} >
            <Accordion>
              <Accordion.Item eventKey="1" >
              <Accordion.Header>Perfil de Ingreso</Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>Haber aprobado el plan de estudios del nivel medio superior</li>
                  <li>Tener afinidad por el uso de las tecnologías de información</li>
                  <li>Interés por la optimización de los procesos productivos a partir del manejo de la información y desarrollo de software</li>
                  <li>Criterio y razonamiento lógico en la solución de problemas</li>
                </ul>
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>

          <Col md={6} className="text-center">
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Perfil de Ingreso</Accordion.Header>
              <Accordion.Body>
                <p className="textoJustificado">

                  El Ingeniero o Ingeniera en Sistemas Computacionales es un
                  profesionista competente que podrá insertarse en los sectores industrial,
                  comercial y de servicios para proporcionar soporte a procesos informáticos
                  (programación, instalación y mantenimiento), así como administrar, desarrollar
                  y actualizar bases de datos y redes de comunicaciones, proponiendo estrategias
                  y soluciones integrales de TIC´s.
                </p>
              </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          
          </Col>
        </Row>
      </Container>

      <Container className="mt-3 mb-3">
        <Accordion>
          <Accordion.Item eventKey="3">
          <Accordion.Header>Campo laboral</Accordion.Header>
          <Accordion.Body>
            <Row className="justify-content-md-center">
              <Col md={12} className="text-center">
                <p className="textoJustificado">
                  El Ingeniero o la Ingeniera en Sistemas Computacionales cuenta
                  con las competencias profesionales necesarias para alcanzar el
                  mejor desempeño en el campo laboral, en el ámbito local, nacional
                  e internacional. Pudiendo desarrollarse como:
                </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md={6}>
                <ul className="no-bullet">
                  <li>Administrador de Bases de Datos</li>
                  <li>
                    Administrador de Calidad de Servicios de TI
                  </li>
                  <li>
                    Administrador de proyectos de TI
                  </li>
                  <li>Administrador de Redes</li>
                  <li>Analista de procesos</li>
                  <li>Analista de sistemas</li>
                  <li>Arquitecto de redes de computadoras</li>
                  <li>Arquitecto o desarrollador de software</li>
                  <li>Líder de proyectos en TI</li>
                </ul>
              </Col>
              <Col md={4}>
                <ul className="no-bullet">
                  <li>Director de innovación en TI</li>
                  <li>Diseñador web</li>
                  <li>Documentador de procesos</li>
                  <li>Gerente de sistemas</li>
                  <li>Gestor de proyectos de TI</li>
                  <li>Gerente de mantenimiento y soporte técnico</li>
                  <li>
                    Gerente del departamento de TI
                  </li>
                  <li>Consultor de servicios de TI</li>
                </ul>
              </Col>

            </Row>
          </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        
      </Container>
    </Layout>
  )
}

export const query = graphql`
 query bannerInicio{
   file(relativePath: {eq: "upa_banner.JPG"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;

