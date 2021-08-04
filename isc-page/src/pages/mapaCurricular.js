import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function MapaCurricular({data}) {
    return (
        <Layout>
          <div className='mapaCurricular'></div>
          <Cabecera
              titulo2="Mapa Curricular"
              titulo1="Ingeniería en Sistemas Computacionales"
              imagen = {data.file.childImageSharp.fluid}
            />
        <Container>
        
         
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
