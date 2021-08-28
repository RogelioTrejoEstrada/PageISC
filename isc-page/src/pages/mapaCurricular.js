import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const materias = 
  {primer: [
    {title: 'Inglés I', tipo: 'IDI'},
    {title: 'Expresión Oral y Escrita',tipo: 'FIT'},
    {title: 'Quimica Básica', tipo: 'CCBB'},
    {title: 'Álgebra Lineal',tipo: 'CCBB'},
    {title: 'Introducción a la Programación',tipo: 'ISC'},
    {title: 'Introducción a las Tecnologías de Información',tipo: 'ISC'},
    {title: 'Herramientas Ofimáticas',tipo: 'ISC'}
  ],
  segundo:[
    {title: 'Inglés II', tipo: 'IDI'},
    {title: 'Desarrollo Humano y Valores',tipo: 'FIT'},
    {title: 'Funciones Matemáticas',tipo: 'CCBB'},
    {title: 'Física',tipo: 'CCBB'},
    {title: 'Electricidad y Magnetismo',tipo: 'CCBB'},
    {title: 'Matemáticas Básicas para Computación',tipo: 'ISC'},
    {title: 'Arquitectura de Computadoras',tipo: 'ISC'},
  ],
  tercer: [
    {title: 'Inglés III',tipo: 'IDI'},
    {title: 'Inteligencia Emocional',tipo: 'FIT'},
    {title: 'Cálculo Diferencial',tipo: 'CCBB'},
    {title: 'Probabilidad y Estadística',tipo: 'CCBB'},
    {title: 'Programación',tipo: 'ISC'},
    {title: 'Introducción a Redes',tipo: 'ISC'},
    {title: 'Mantenimiento a Equipo de Cómputo',tipo: 'ISC'},
  ],
 cuarto: [
  {title: 'Inglés IV',tipo: 'IDI'},
  {title: 'Habilidades Cognitivas y Creatividad',tipo: 'FIT'},
  {title: 'Cálculo Integral',tipo: 'CCBB'},
  {title: 'Ingeniería de Software',tipo: 'ISC'},
  {title: 'Estructura de Datos',tipo: 'ISC'},
  {title: 'Ruteo y Conmutación',tipo: 'ISC'},
  {title: 'Estancia I',tipo: 'ISC'},
],
quinto :[
  {title: 'Inglés V',tipo: 'IDI'},
  {title: 'Ética Profesional',tipo: 'FIT'},
  {title: 'Matemáticas para Ingeniería I',tipo: 'CCBB'},
  {title: 'Física para Ingeniería',tipo: 'CCBB'},
  {title: 'Fundamentos de POO',tipo: 'ISC'},
  {title: 'Escalamiento de Redes',tipo: 'ISC'},
  {title: 'Base de Datos',tipo: 'ISC'},
],
 sexto:[
  {title: 'Inglés VI',tipo: 'IDI'},
  {title: 'Habilidades Gerenciales',tipo: 'FIT'},
  {title: 'Matemáticas para Ingeniería II',tipo: 'CCBB'},
  {title: 'Sistemas Operativos',tipo: 'ISC'},
  {title: 'Programación Orientada a Objetos',tipo: 'ISC'},
  {title: 'Interconexión de Redes',tipo: 'ISC'},
  {title: 'Administración de Base de Datos',tipo: 'ISC'},
],
septimo: [
  {title: 'Inglés VII',tipo: 'IDI'},
  {title: 'Liderazgo de Equipos de Alto Desempeño',tipo: 'FIT'},
  {title: 'Formulación de Proyectos de TI',tipo: 'ISC'},
  {title: 'Lenguajes y Autómatas',tipo: 'ISC'},
  {title: 'Programación WEB',tipo: 'ISC'},
  {title: 'Ingeniería de Requisitos',tipo: 'ISC'},
  {title: 'Estancia II',tipo: 'ISC'},
],
octavo: [
  {title: 'Inglés VIII',tipo: 'IDI'},
  {title: 'Tecnologías de Virtualización',tipo: 'ISC'},
  {title: 'Admon. de Proyectos de TI',tipo: 'ISC'},
  {title: 'Tecnologías y Aplicaciones en Internet',tipo: 'ISC'},
  {title: 'Diseño de Interfaces',tipo: 'ISC'},
  {title: 'Sistemas Inteligentes',tipo: 'ISC'},
  {title: 'Gestión de Desarrollo de SW',tipo: 'ISC'},
],
 noveno: [
  {title: 'Inglés IX',tipo: 'IDI'},
  {title: 'Inteligencia de Negocios',tipo: 'ISC'},
  {title: 'Desarrollo de Negocios para TI',tipo: 'ISC'},
  {title: 'Sistemas Embebidos',tipo: 'ISC'},
  {title: 'Programación Móvil',tipo: 'ISC'},
  {title: 'Seguridad Informática',tipo: 'ISC'},
  {title: 'Expresión Oral y Escrita II',tipo: 'ISC'},
]}

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

    return (
      <Layout>
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
          <Row className="mapaCurricular-tarjeta">
            <Col md={12} sm={6} className="mapaCurricular-header">
              <h4>Primer Ciclo de Formación</h4>
            </Col>
            <Col md={12} sm={8}>
              <h5>Primer Cuatrimestre</h5>
              {materias.primer.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                  {materia.title}
                </Button>
              ))}
              <h5>Segundo Cuatrimestre</h5>
              {materias.segundo.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                  {materia.title}
                </Button>
              ))}
              <h5>Tercer Cuatrimestre</h5>
              {materias.tercer.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
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
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                  {materia.title}
                </Button>
              ))}
              <h5>Quinto Cuatrimestre</h5>
              {materias.quinto.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                  {materia.title}
                </Button>
              ))}
              <h5>Sexto Cuatrimestre</h5>
              {materias.sexto.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
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
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                {materia.title}
              </Button>
              ))}
              <h5>Octavo Cuatrimestre</h5>
              {materias.octavo.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
                {materia.title}
              </Button>
              ))}
              <h5>Noveno Cuatrimestre</h5>
              {materias.noveno.map(materia => (
                <Button className={setColorMateria(materia.tipo)} key={materia.title}>
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
