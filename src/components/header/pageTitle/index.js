import React, { useContext, useLayoutEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Store from "../../../context/store"
import navitems from "../navigation/navItems"
import Transition from "../../transition"

export default () => {
  const path = useContext(Store).path
  const [pageTitle, setPageTitle] = useState()

  useLayoutEffect(() => {
    navitems.map(object =>
      RegExp(path).test(`/${object.target}/`)
        ? setPageTitle(object.title)
        : false
    )
  }, [path])

  return (
    <Transition location={path}>
      {path !== "/" && pageTitle && (
        <section id="page-title">
          <Container as="section">
            <h1>{pageTitle}</h1>
          </Container>
        </section>
      )}
    </Transition>
  )
}
