import React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import Logotype from "../logotype"
import PageTitle from "./pageTitle"
import "./style.scss"

export default () => {
  return (
    <header id="main-header">
      <section id="header-logotype">
        <Link to="/">
          <Logotype />
        </Link>
      </section>
      <section id="main-navigation" className="bg-smoke">
        <Navigation />
      </section>
      <PageTitle />
    </header>
  )
}
