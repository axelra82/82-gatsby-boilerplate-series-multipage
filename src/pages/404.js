import React from "react"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"

export default () => {
  return (
    <>
      <SEO title="404: Not found" />
      <Container>
        <h1>PAGE NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </>
  )
}
