import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"

export default ({ people }) => {
  const total = people.length
  let columns = [],
    rows = [],
    counter = 0
  people.map((object, i) => {
    const { frontmatter } = object.node
    const { image, excerpt, name, slug } = frontmatter

    columns.push(
      <Col
        lg={(total - counter) % 2 === 0 ? { span: 4, offset: 1 } : 4}
        as="section"
        key={i}
      >
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <section className="person-bio">
          <p className="text-small">{excerpt}</p>
          <div className="fade-out"></div>
          <Link className="read-more" to={`${slug}`}>
            Read more <FontAwesomeIcon icon={faChevronDown} />
          </Link>
        </section>
      </Col>
    )
    if ((i + 1) % 3 === 0 || i === total - 1) {
      counter++
      rows.push(
        <Row key={i} className="mb-2">
          {columns}
        </Row>
      )
      columns = []
    }
    return null
  })
  return rows
}
