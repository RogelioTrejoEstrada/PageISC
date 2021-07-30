import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
    const data = useStaticQuery(graphql`
    query SiteInfo {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    const {title} = data.site.siteMetadata;

    return (
        <nav>
            <h1>{title} </h1>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre nosotros</Link>
                <Link to="/instalaciones">Instalaciones</Link>
                <Link to="/mapa-curricular">Mapa Curricular</Link>
            </div>
        </nav>
    )
}
