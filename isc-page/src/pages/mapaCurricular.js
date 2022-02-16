import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import ModalMateria from '../components/ModalMateria'
import Seo from '../components/Seo'
import materia from '../materias/materiasData.json'
import materias from '../materias/materias.json'


export default function MapaCurricular({data}) {

   function setColorMateria(tipo) {
        var valor = 'btn-materia'
      switch (tipo){
        case 'IDI': valor = 'btn-materia btn-idi'; break;
        case 'FIT': valor= 'btn-materia btn-fit'; break;
        case 'CCBB': valor= 'btn-materia btn-ccbb'; break;
        case 'ISC': valor = 'btn-materia'; break;
        default: valor= 'btn-materia;'
      }
      return valor;
    }

    const [modalShow, setModalShow] = React.useState(false);

    const [datosModal, setDatosModal] = React.useState({title: "", tipo: "", creditos: "", objetivo: "", Unidades: ""})

    const DatosMateria = (nombre) => {
      const materiaDatos = (nombre !== "") ? materia.find(dato => dato.title === nombre) : {title: "No encontrado"}
      //console.log("Materia: ", materiaDatos)
      setDatosModal(materiaDatos)
      setModalShow(true)
    }
    
    const agregarClase = (nombre) => {
      console.log(nombre)
      let contribuye = document.getElementById('Herramientas Ofimáticas')
      contribuye.classList.add('btn-contribuye')

      let test = document.getElementById('Introducción a la Programación')
      test.classList.add('btn-atribuye')
    }

    //Elimina las clases de contribución y atribución a
    const eliminarClase = () => {
      let contribuidores = document.getElementsByClassName('btn-contribuye')
      Array.prototype.forEach.call(contribuidores, function(element){
        element.classList.remove('btn-contribuye')
      })
      let atribuidores = document.getElementsByClassName('btn-atribuye')
      Array.prototype.forEach.call(atribuidores, function(element){
        element.classList.remove('btn-atribuye')
      })
      let actual = document.getElementsByClassName('btn-actual')
      Array.prototype.forEach.call(actual, function(element){
        element.classList.remove('btn-atribuye')
      })
    }

    return (
      <Layout>
        <Seo title = "Mapa Curricular"/>
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
        </Container>
        <Container className="mt-4 mb-4 text-center ">

       
          <ModalMateria show ={modalShow} onHide={()=> setModalShow(false)} materia = {datosModal}/>

          <Row className="mapaCurricular-tarjeta">
            <Col md={12} sm={6} className="mapaCurricular-header">
              <h4>Primer Ciclo de Formación</h4>
            </Col>
            <Col md={12} sm={8}>
              <h5>Primer Cuatrimestre</h5>
              {materias.primer.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)}
                  onMouseOver = {()=> agregarClase(materia.title)} onMouseLeave = {() => eliminarClase()}>
                  {materia.title}
                </Button>
              ))}
              <h5>Segundo Cuatrimestre</h5>
              {materias.segundo.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} id={materia.title} onClick={() => DatosMateria(materia.title)} >
                  {materia.title}
                </Button>
              ))}
              <h5>Tercer Cuatrimestre</h5>
              {materias.tercer.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                  {materia.title}
                </Button>
              ))}
            </Col>
          </Row>
          <Row className="mt-5 mapaCurricular-tarjeta">
            <Col md={12} sm={6} className="mapaCurricular-header">
              <h4>Segundo Ciclo de Formación</h4>
            </Col>
            <Col md={12} sm={8}>
              <h5>Cuarto Cuatrimestre</h5>
              {materias.cuarto.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                  {materia.title}
                </Button>
              ))}
              <h5>Quinto Cuatrimestre</h5>
              {materias.quinto.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                  {materia.title}
                </Button>
              ))}
              <h5>Sexto Cuatrimestre</h5>
              {materias.sexto.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                  {materia.title}
                </Button>
              ))}
            </Col>
          </Row>
          <Row className="mt-5 mapaCurricular-tarjeta">
            <Col md={12} sm={6} className="mapaCurricular-header">
              <h4>Tercer Ciclo de Formación</h4>
            </Col>
            <Col md={12} sm={8}>
              <h5>Séptimo Cuatrimestre</h5>
              {materias.septimo.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                {materia.title}
              </Button>
              ))}
              <h5>Octavo Cuatrimestre</h5>
              {materias.octavo.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                {materia.title}
              </Button>
              ))}
              <h5>Noveno Cuatrimestre</h5>
              {materias.noveno.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title} onClick={() => DatosMateria(materia.title)}>
                {materia.title}
              </Button>
              ))}
              <h5>Décimo Cuatrimestre</h5>
              <Button className="btn-materia">Estadía</Button>
            </Col>
          </Row> 
         
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
