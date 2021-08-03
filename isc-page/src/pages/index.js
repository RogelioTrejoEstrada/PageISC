import React from "react"

import { Col, Container, Row} from "react-bootstrap";
import Layout from "../components/Layout";
import Cabecera from "../components/Cabecera";
import { StaticImage } from "gatsby-plugin-image";

 export default function Home() {
   return (
     <Layout>
       <div className='inicio'></div>
       <Container>
         <Cabecera
           titulo2="Universidad Politécnica de Aguascalientes"
           titulo1="Ingeniería en Sistemas Computacionales"
         />
         <Row className="justify-content-md-center">
           <Col md={6}>
             <div className="textoJustificado">
               <p>
                 El programa académico de Ingeniería en Sistemas Computacionales es la renovación y
                 actualización del programa anterior Ingeniería en Sistemas Estratégicos de Información, que
                 tiene como objetivo diseñar, desarrollar e implementar sistemas
                 informáticos en las organizaciones, aplicando las tecnologías
                 de información y de las comunicaciones para asegurar la
                 eficiencia en los procesos productivos.
               </p>
               <p>
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
               </p>
             </div>
           </Col>
           <Col md={6} className="m-auto">
             {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
             <StaticImage src="../images/inicio.jpg" alt="UPA Logo" />
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
         <ul>
           <Row>
             <Col>
               <li>Administrador de Bases de Datos</li>
               <li>
                 Administrador de Calidad de Servicios de Tecnologías de la
                 Información
               </li>
               <li>
                 Administrador de proyectos de Tecnologías de la Información
               </li>
               <li>Administrador de Redes</li>
               <li>Analista de procesos</li>
               <li>Analista de sistemas</li>
               <li>Arquitecto de redes de computadoras</li>
               <li>Arquitecto de software</li>
               <li>Consultor en nuevas Tecnologías de la Información</li>
               <li>Consultor de servicios de Tecnologías de la Información</li>
               <li>Desarrollador de software</li>
             </Col>
             <Col>
               <li>Director de innovación en Tecnologías de la Información</li>
               <li>Diseñador web</li>
               <li>Documentador de procesos</li>
               <li>Gerente de sistemas</li>
               <li>Gestor de proyectos de Tecnologías de la Información</li>
               <li>Gerente de mantenimiento y soporte técnico</li>
               <li>
                 Gerente del departamento de Tecnologías de la Información
               </li>
               <li>Líder de proyectos en Tecnologías de la Información</li>
               <li>Programador</li>
               <li>Tester</li>
               <li>Web master</li>
               <li>
                 Desarrollador de proyectos de Tecnologías de Información
                 propios
               </li>
             </Col>
           </Row>
         </ul>
       </Container>
     </Layout>
   )
 }


 