import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"

export default ({ data }) => {
  const { html: text, frontmatter } = data.markdownRemark
  const { image, name } = frontmatter

  return (
    <>
      <SEO title={name} />
      <Container>
        <img
          src={image}
          alt={name}
          style={{ maxWidth: "35%", margin: "0 2rem 2rem 0" }}
          align="left"
        />
        <h4>{name}</h4>
        <section dangerouslySetInnerHTML={{ __html: text }} />
        <Link to="/about-us/">
          <FontAwesomeIcon icon={faChevronLeft} /> back to the party
        </Link>
      </Container>
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        image
      }
      html
    }
  }
`
