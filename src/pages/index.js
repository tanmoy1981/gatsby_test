import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <article>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>{document.node.title}</h2>
          <p>{document.node.content}</p>
        </li>
      ))}
    </ul>
  </article>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          title
          Content
        }
      }
    }
  }
`