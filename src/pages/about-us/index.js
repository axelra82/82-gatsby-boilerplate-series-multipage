import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import SEO from "../../components/seo"
import People from "../../components/people/"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/about-us/" } }
        sort: { order: ASC, fields: frontmatter___order }
      ) {
        edges {
          node {
            frontmatter {
              slug
              name
              image
              excerpt
            }
            html
          }
        }
      }
    }
  `)
  const people = data.allMarkdownRemark.edges
  return (
    <>
      <SEO title="About" />
      <Container>
        <People people={people} />
      </Container>
    </>
  )
}
