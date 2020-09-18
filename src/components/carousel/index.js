import React from "react"
import { Row, Col, Carousel } from "react-bootstrap"
import items from "./items"
import "./style.scss"

export default () => {
  const slides = items.map((item, i) => {
    const { title, content, image } = item
    return (
      <Carousel.Item key={i}>
        <Row>
          <Col lg={5}>
            <img src={image} alt={title} className="cover-image" />
          </Col>
          <Col lg={7} className="carousel-item-text">
            <h3>{title}</h3>
            <p>{content}</p>
          </Col>
        </Row>
      </Carousel.Item>
    )
  })
  return <Carousel indicators={false}>{slides}</Carousel>
}
