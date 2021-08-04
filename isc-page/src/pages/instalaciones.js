import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Instalaciones({data}) {
  return (
    <Layout>
      <div className='instalaciones'></div>
      <Cabecera
            titulo2="Instalaciones"
            titulo1="Ingeniería en Sistemas Computacionales"
            imagen = {data.file.childImageSharp.fluid}
          />
      <Container>
      
       
      </Container>
    </Layout>
  )
}


export const query = graphql`
 query bannerInst{
   file(relativePath: {eq: "inicio.jpg"}){
     childImageSharp {
       fluid(maxWidth: 1800) {
         ...GatsbyImageSharpFluid
       }
     }
   }
 }
`;