import React from "react"

import { Col, Container, Row} from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import Seo from "../components/Seo";
//import { StaticImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'
//import Img from 'gatsby-image'

 export default function Home({data}) {
   
   return (
     <Layout>
       <Seo title = "ISC"/>
       <div className='inicio'></div>
       <Cabecera
           titulo2="Universidad Politécnica de Aguascalientes"
           titulo1="Ingeniería en Sistemas Computacionales"
           imagen = {data.file.childImageSharp.fluid}
         />
       <Container>
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
               {/* <p>
                 Evaluada en el Nivel 1 por los Comités Interinstitucionales
                 para la Evaluación de la Educación Superior, A.C. (CIEES).
               </p>
               <p>
                 Así como acreditada por el Consejo Nacional de Acreditación en
                 Informática y Computación, A.C. (CONAIC).
               </p>
               <p>
                 También se encuentra incorporada al Padrón EGEL de Programas de
                 Alto Rendimiento Académico de parte del CENEVAL
               </p> */}
             </div>
           </Col>
           {/* <Col md={6} className="m-auto">
             
             <StaticImage src="../images/bienvenidos.JPG" alt="Bienvenidos" placeholder="blurred" layout="fullWidth"/> 
           </Col> */}
         </Row>
       </Container>

       <Container className="mt-3 mb-3">
         <Row className="justify-content-md-center">
           <Col md={11} className="text-center">
             <h3>Perfil de egreso</h3>
             <p className="textoJustificado">
               
               El Ingeniero o Ingeniera en Sistemas Computacionales es un 
             profesionista competente que podrá insertarse en los sectores industrial, 
             comercial y de servicios para proporcionar soporte a procesos informáticos
            (programación, instalación y mantenimiento), así como administrar, desarrollar 
            y actualizar bases de datos y redes de comunicaciones, proponiendo estrategias
             y soluciones integrales de TIC´s.
             </p>
           </Col>
         </Row>

         
       </Container>

       <Container className="mt-3 mb-3">
         <Row className="justify-content-md-center">
           <Col md={11} className="text-center">
             <h3>Campo laboral</h3>
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
               <li>Arquitecto de software</li>
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
             </ul>
           </Col>
           <Col md={4}>
             <ul className="no-bullet">
               <li>Consultor en nuevas TI</li>
               <li>Consultor de servicios de TI</li>
               <li>Desarrollador de software</li>
               <li>Líder de proyectos en TI</li>
               <li>Programador</li>
               <li>Tester</li>
               <li> Desarrollador de proyectos de TI propios </li>
             </ul>
           </Col>
         </Row>
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

 