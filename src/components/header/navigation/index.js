import React from "react"
import { Link } from "gatsby"
import { Container, Nav, NavItem } from "react-bootstrap"
import navItems from "./navItems"

export default () => {
  return (
    <Container as="nav">
      <Nav as="ul">
        {navItems.map(item => {
          const target = `/${item.target}/`
          const name = item.name
          return (
            <NavItem key={item.id} as="li">
              <Link to={target}>
                <span>{name}</span>
              </Link>
            </NavItem>
          )
        })}
      </Nav>
    </Container>
  )
}
