import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import {portfolio, projects} from '../styles/projects.module.css'

export default function Instalaciones({data}) {
  const proyectos = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Instalaciones</h2>
        <h3>instalaciones </h3>
        <div className = {projects}>
          {proyectos.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <h3> {project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

//Export page query
export const query = graphql`
query  instalacionesPage{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        stack
        slug
      }
      id
    }
  }
}

`