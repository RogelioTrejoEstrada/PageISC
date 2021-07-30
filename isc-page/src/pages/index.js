import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css'

export default function Home({data}) {


  return (
    <Layout>
    <section className = {header} >
      <div>
        <h2>Diseño</h2>
        <h3>Desarrollo y despliegue</h3>
        <p>Diseño UX y desarrollo web</p>
        <Link className ={btn} to= '/about'> Mi boton</Link>
      </div>
      <img src= "img/logo_UPA.png" alt = "" style={{maxWidth: '100%'}}/>
    </section>
    </Layout>
  )
}

