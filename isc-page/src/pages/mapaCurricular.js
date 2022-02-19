import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
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

  const [datosModal, setDatosModal] = React.useState({ title: "", tipo: "", creditos: "", objetivo: "", Unidades: "" })

  const DatosMateria = (nombre) => {
    const materiaDatos = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("Materia: ", materiaDatos)
    setDatosModal(materiaDatos)
    setModalShow(true)
  }

  const agregarClase = (nombre) => {
    const materiaExtras = (nombre !== "") ? materia.find(dato => dato.title === nombre) : { title: "No encontrado" }
    //console.log("atrobuptp_ ", materiaExtras.contribuye)
    let contribuye = ""
    let atribucion = ""
    if (materiaExtras.hasOwnProperty('contribuye')) {
      materiaExtras.contribuye.forEach(mat => {
        contribuye = document.getElementById(mat)
        //console.log(contribuye)
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
            <Col md>
              <Row>
                <h5>Primer Ciclo</h5>
                <Col  className='columna-materia' >
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
                <Col  className='columna-materia'>
                <p>Tercero</p>
                  {materias.tercer.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                </Col>
                <Col xs={12} md={1} className = 'columna-materia'>
                  <Button className="btn-materia btn-ciclo"><span className='txt-estadia'>Primer Ciclo</span></Button>
                </Col>
              </Row>
            </Col>

            {/*Segundo ciclo */}
            <Col md>
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
                <Col  className='columna-materia'>
                <p>Sexto</p>
                  {materias.sexto.map(materia => (
                    <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                      onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                      {materia.title}
                    </Button>
                  ))}
                  
                </Col>
                <Col xs={12} md={1} className = 'columna-materia'>
                  <Button className="btn-materia btn-ciclo"><span className='txt-estadia'>Segundo Ciclo</span></Button>
                </Col>
              </Row>
            </Col>

            {/*Tercer ciclo */}
            <Col md>
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
                  <Button className="btn-materia btn-estadia"><span className='txt-estadia'>Estadía</span></Button>
                </Col>
              </Row>
            </Col>

            
          </Row>

        </Container>


        {/* 
        <Row className="mt-5 mapaCurricular-tarjeta">
          <Col md={12} sm={6} className="mapaCurricular-header">
            <h4>Tercer Ciclo de Formación</h4>
          </Col>
          <Col md={12} sm={8}>
            <h5>Séptimo Cuatrimestre</h5>
            {materias.septimo.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Octavo Cuatrimestre</h5>
            {materias.octavo.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Noveno Cuatrimestre</h5>
            {materias.noveno.map(materia => (
              <Button className={setColorMateria(materia.tipo)} id={materia.title} key={materia.title} onClick={() => DatosMateria(materia.title)}
                onMouseOver={() => agregarClase(materia.title)} onMouseLeave={() => eliminarClase()}>
                {materia.title}
              </Button>
            ))}
            <h5>Décimo Cuatrimestre</h5>
            <Button className="btn-materia">Estadía</Button>
          </Col>
        </Row>
                */}
      </Container>
    </Layout>
  )
}



export const query = graphql`
 query bannerMapa{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;
