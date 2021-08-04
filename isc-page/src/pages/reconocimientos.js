import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Reconocimientos({data}) {
    
    return (
      <Layout>
        <div className='reconocimientos'></div>
        <Cabecera
            titulo2="Reconocimientos"
            titulo1="Ingeniería en Sistemas Computacionales"
            imagen = {data.file.childImageSharp.fluid}
          />
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="textoJustificado">
                <h4>Reconocimientos a Nivel Nacional e Internacional</h4>
                <p>
                  La carrera de Ingeniería en Sistemas Estratégicos de
                  Información, desde 2016, ha formado parte del Padrón de
                  Programas de Licenciatura de Alto Rendimiento Académico de
                  CENEVAL. Este 2019 someteremos nuevamente a la convocatoria.
                  El programa de Ingeniería en Sistemas Estratégicos de
                  Información de la UPA, es el único dentro de todas las
                  Universidades Politécnicas del país que tiene esta cantidad de
                  logros.
                </p>
                <p>
                  El programa de Ingeniería en Sistemas Estratégicos de
                  Información  de la UPA es uno de los únicos 17 programas de
                  Ingeniería en Software en todo el país que están dentro del
                  padrón de CENEVAL (la gran mayoría son de universidades
                  privadas).
                </p>
                <p>
                  La UPA está certificada en ISO9000-2015 (Sistemas de Gestión
                  de Calidad) e ISO14001 (Sistema de Gestión Ambiental) lo cual
                  asegura la calidad de nuestros procesos.
                </p>
                <p>
                  El programa de Ingeniería en Sistemas Estratégicos de
                  Información de la UPA es considerada de calidad de acuerdo a
                  los evaluadores de CIEES, programa que depende de la SEP y se
                  encuentra en proceso de reacreditación por el organismo
                  evaluador externo CONAIC. Los organismos mencionados evalúan
                  la calidad de los programas académicos de educación superior e
                  Ingeniería en todas las Universidades del país bajo estrictos
                  estándares.
                </p>
              </div>
            </Col>
            <Col md={6} className="m-auto">
              <StaticImage src="../images/inicio.jpg" alt="UPA Logo" />
            </Col>
          </Row>
          <Row>
            <h4>Reconocimientos a Nivel Estatal</h4>
            <p>
              Formamos parte de organismos que integran a las principales
              universidades aprovechando convenios y otros apoyos. Además
              contamos con vinculación activa con la gran mayoría de empresa del
              estado y de la región.
            </p>

            <h4>Reconocimientos a nuestros estudiantes</h4>
            <p>
              Un egresado del 2019, fue reconocido como ganador del premio de
              Excelencia del CENEVAL por sus resultados en el examen EGEL
              (examen equivalente al EXANI II que se aplicada a nivel
              licenciatura para las distintas carreras ofertadas por las
              universidades del país), siendo el primer premio nacional en
              Aguascalientes en este examen.
            </p>
            <p>
              Varios alumnos han realizado movilidades nacionales e
              internacionales, entre otros a Colombia, España, Estados Unidos,
              Alemania, Argentina, Brasil y Chile.
            </p>
          </Row>
        </Container>
      </Layout>
    )
}

export const query = graphql`
 query bannerRecon{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;