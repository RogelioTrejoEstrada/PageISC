import React from 'react'
import { Container, Button, Row, Col, Accordion } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ModalMateria from '../components/ModalMateria'
import Seo from '../components/Seo'
import materia from '../materias/materiasData.json'
import materias from '../materias/materias.json'


export default function MapaCurricular({ data }) {

  function setColorMateria(tipo) {
    var valor = 'btn-materia'
    switch (tipo) {
      case 'IDI': valor = 'btn-materia btn-idi'; break;
      case 'FIT': valor = 'btn-materia btn-fit'; break;
      case 'CCBB': valor = 'btn-materia btn-ccbb'; break;
      case 'ISC': valor = 'btn-materia'; break;
      default: valor = 'btn-materia;'
    }
    return valor;
  }

  const [modalShow, setModalShow] = React.useState(false);

  const [datosModal, setDatosModal] = React.useState({ title: "", tipo: "", creditos: "", objetivo: "", Unidades: "", archivo: "" })

  const DatosMateria = (nombre) => {
    const materiaDatos = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("Materia: ", materiaDatos)
    setDatosModal(materiaDatos)
    setModalShow(true)
  }

  const agregarClase = (nombre) => {
    const materiaExtras = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("atrobuptp_ ", materiaExtras)

    let contribuye = ""
    let atribucion = ""
    if (materiaExtras.hasOwnProperty('contribuye')) {
      materiaExtras.contribuye.forEach(mat => {
        contribuye = document.getElementById(mat)
        console.log(mat, contribuye)
        contribuye.classList.add('btn-contribuye')
      })
    }

    if (materiaExtras.hasOwnProperty('atribucion')) {
      materiaExtras.atribucion.forEach(mat => {
        atribucion = document.getElementById(mat)
        //console.log(atribucion)
        atribucion.classList.add('btn-atribuye')
      })
    }
  }

  //Elimina las clases de contribución y atribución a
  const eliminarClase = () => {
    let contribuidores = document.getElementsByClassName('btn-contribuye')


    while (contribuidores.length > 0)
      contribuidores[0].classList.remove('btn-contribuye')

    let atribuidores = document.getElementsByClassName('btn-atribuye')
    while (atribuidores.length > 0)
      atribuidores[0].classList.remove('btn-atribuye')


    let actual = document.getElementsByClassName('btn-actual')
    Array.prototype.forEach.call(actual, function (element) {
      element.classList.remove('btn-atribuye')
    })
  }

  return (
    <Layout>
      <Seo title="Mapa Curricular" />
      <div className="mapaCurricular"></div>
      <Cabecera
        titulo2="Mapa Curricular"
        titulo1="Ingeniería en Sistemas Computacionales"
        imagen={data.file.childImageSharp.fluid}
      />
      <Container className="justify-content-center text-center">
        <div className="subTitulo">
          <h3>Plan de estudios 2020</h3>
        </div>
        <Row className='mt-1'>
          <Col> <span className='caja-atribucion'></span>Materias que le contribuye(n)</Col>
          <Col> <span className='caja-actual'></span>Materia actual</Col>
          <Col> <span className='caja-contribucion'></span>Materias a la(s) que contribuye</Col>
        </Row>
      </Container>
      <Container className="mt-4 mb-4 text-center ">


        <ModalMateria show={modalShow} onHide={() => setModalShow(false)} materia={datosModal} />

        <Container fluid="md">
          <Row>
            {/*Primer ciclo */}
            <Col md >
              <Row>
                <h5>Primer Ciclo</h5>
                <Col className='columna-materia' >
                  <p>Primero</p>
                  {materias.primer.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Segundo</p>
                  {materias.segundo.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Tercero</p>
                  {materias.tercer.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                {/* <Col xs={12} md={1} className = 'columna-materia'>
                  <Button className="btn-materia btn-ciclo"><span className='txt-estadia'>Primer Ciclo</span></Button>
                </Col> */}
              </Row>
            </Col>

            {/*Segundo ciclo */}
            <Col md className='bg-inf'>
              <Row>
                <h5>Segundo Ciclo</h5>
                <Col className='columna-materia'>
                  <p>Cuarto</p>
                  {materias.cuarto.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Quinto</p>
                  {materias.quinto.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Sexto</p>
                  {materias.sexto.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}

                </Col>
                {/* <Col xs={12} md={1} className = 'columna-materia'>
                  <Button className="btn-materia btn-ciclo"><span className='txt-estadia'>Segundo Ciclo</span></Button>
                </Col> */}
              </Row>
            </Col>

            {/*Tercer ciclo */}
            <Col md className='bg-primay'>
              <Row>
                <h5>Tercer Ciclo</h5>
                <Col className='columna-materia'>
                  <p>Séptimo</p>
                  {materias.septimo.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Octavo</p>
                  {materias.octavo.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col className='columna-materia'>
                  <p>Noveno</p>
                  {materias.noveno.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col xs={12} md={1} className='columna-materia'>
                  <p>Décimo</p>
                  <Button className="btn-materia btn-estadia"
                    key='Estadia' id='Estadía' onClick={() => DatosMateria('Estadía')}
                    onMouseOver={() => agregarClase('Estadía')} onMouseLeave={() => eliminarClase()}
                  ><span className='txt-estadia'>Estadía</span></Button>

                </Col>
              </Row>
            </Col>


          </Row>
 
        </Container>
        <Container className='mt-5 mb-5'>
          <div className="subTitulo mb-4">
            <h3 className="text-center">Competencias por ciclo de formación</h3>
          </div>
          <Accordion>
            <Accordion.Item eventKey='primer' key='primer' className='mb-3'>
              <Accordion.Header>Primer Ciclo de Formación</Accordion.Header>
              <Accordion.Body>
                <Row className="textoJustificado">
                  <p>Administrar la infraestructura tecnológica mediante el mantenimiento y soporte técnico,
                    técnicas de diseño y administración de redes para optimizar el desempeño, garantizando la operación física y lógica de los equipos de cómputo y redes de
                    área local con el fin de contribuir al logro de los objetivos de la organización.</p>

                  <li>Realizar mantenimiento y soporte técnico a equipo de cómputo y sistemas con base en un plan y en respuesta a las contingencias, empleando
                    procedimientos y técnicas para garantizar la disponibilidad y optimizar los recursos de la organización.</li>
                </Row></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='segundo' key='segundo' className='mb-3'>
              <Accordion.Header>Segundo Ciclo de Formación</Accordion.Header>
              <Accordion.Body>
                <Row className="textoJustificado">
                  <p>Administrar la infraestructura tecnológica mediante el mantenimiento y soporte técnico,
                    técnicas de diseño y administración de redes para optimizar el desempeño, garantizando la operación física y lógica de los equipos de cómputo y redes de
                    área local con el fin de contribuir al logro de los objetivos de la organización.</p>

                  <li>Administrar redes de datos mediante el análisis del entorno y de los requerimientos, con base en procedimientos, herramientas, estándares y polí ticas aplicables para garantizar la seguridad y operatividad de la red.</li>
                </Row></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='tercer' key='tercer' className='mb-3'>
              <Accordion.Header>Tercer Ciclo de Formación</Accordion.Header>
              <Accordion.Body>
                <Row className="textoJustificado">
                  <p>Desarrollar soluciones innovadoras de integración de tecnologías de la información mediante metodologías de desarrollo de software, diseño de base de datos, seguridad de la información y administración de proyectos; con
                    base en los estándares aplicables para atender las áreas de oportunidad, resolver las necesidades y optimizar los procesos y recursos de la organización.</p>

                  <li>Modelar software con base en los requerimientos usando est á ndares y técnicas para desarrollar una solución que satisfaga las necesidades específicas de la organización.</li>

                  <li>Desarrollar soluciones de software con base en metodologías, procedimientos y técnicas para satisfacer las necesidades específicas de la organización.</li>
                  <li>Gestiona sistemas de bases de datos utilizando técnicas, métodos y herramientas de desarrollo de bases de datos para garantizar la seguridad de la información y consistencia de los datos.</li>
                  <li>Gestionar proyectos innovadores de integración de tecnologías de la información mediante metodología de investigación, herramientas administrativas y estándares aplicables para la optimización de procesos y recursos. </li>
                </Row></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>

      </Container>
    </Layout>
  )
}



export const query = graphql`
 query bannerMapa{
   file(relativePath: {eq: "nosotros/inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;
